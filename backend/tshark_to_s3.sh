#!/bin/bash

# Vars
CAPTURE_DIR="/tmp/tshark_captures"
S3_BUCKET="s3://sandiablue25/packets"
INTERFACE="enp0s3"  # change to your network interface
FILE_PREFIX="capture"
ROTATE_DURATION=60  # seconds per file

mkdir -p "$CAPTURE_DIR"

# Start tshark in the background
tshark -i "$INTERFACE" -b duration:$ROTATE_DURATION -w "$CAPTURE_DIR/$FILE_PREFIX" &

# Monitor the directory and upload new files
inotifywait -m -e close_write --format "%f" "$CAPTURE_DIR" | while read FILE
do
    echo "Uploading $FILE to S3..."
    aws s3 cp "$CAPTURE_DIR/$FILE" "$S3_BUCKET/$FILE" --only-show-errors
    if [ $? -eq 0 ]; then
        echo "Uploaded $FILE successfully"
        rm "$CAPTURE_DIR/$FILE"
    else
        echo "Upload failed for $FILE"
    fi
done
