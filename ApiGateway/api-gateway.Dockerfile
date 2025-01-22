FROM kong:3.0

COPY kong.conf /etc/kong/kong.conf

CMD ["kong", "reload"]
