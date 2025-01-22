FROM envoyproxy/envoy:v1.22-latest

COPY envoy.yaml /etc/envoy/envoy.yaml

CMD ["envoy", "-c", "/etc/envoy/envoy.yaml"]
