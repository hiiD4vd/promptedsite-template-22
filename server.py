#!/usr/bin/env python3
import http.server
import socketserver
import os
import urllib.parse
import mimetypes

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

# Ensure complete MIME type mappings
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("application/wasm", ".wasm")
mimetypes.add_type("image/ktx2", ".ktx2")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("application/json", ".json")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("font/woff", ".woff")
mimetypes.add_type("font/ttf", ".ttf")
mimetypes.add_type("model/gltf-binary", ".glb")
mimetypes.add_type("model/gltf+json", ".gltf")
mimetypes.add_type("video/mp4", ".mp4")
mimetypes.add_type("image/webp", ".webp")

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Strip query string for file resolution
        parsed = urllib.parse.urlparse(self.path)
        clean_path = parsed.path.lstrip("/")
        
        # Handle payload specifically
        if clean_path == "_payload.json":
            target = os.path.join(DIRECTORY, "_payload.json")
            if os.path.exists(target):
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                with open(target, "rb") as f:
                    self.wfile.write(f.read())
                return

        local_file = os.path.join(DIRECTORY, clean_path)
        if clean_path and not os.path.exists(local_file) and not "." in os.path.basename(clean_path):
            # Fallback to index.html for client-side routing
            self.path = "/index.html"
        else:
            self.path = parsed.path

        return super().do_GET()

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    for port in range(PORT, PORT + 20):
        try:
            with socketserver.TCPServer(("", port), SPAHandler) as httpd:
                print(f"[PrompTedSite Server] Running at http://localhost:{port}/")
                print(f"[PrompTedSite Server] Serving directory: {DIRECTORY}")
                httpd.serve_forever()
        except OSError:
            continue

if __name__ == "__main__":
    run_server()
