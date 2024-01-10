FROM python:3

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY mysite/ /app/

# Give execute permission to the script
RUN chmod +x script.sh

# Run the script when the container launches
CMD ["./script.sh"]

