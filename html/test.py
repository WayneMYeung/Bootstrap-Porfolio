import requests
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

def decode_secret_message(doc_url):
    response = requests.get(doc_url)
    if response.status_code != 200:
        print("Failed to fetch document")
        return

    soup = BeautifulSoup(response.text, "html.parser")
    table = soup.find("table")
    if not table:
        print("No table found in the document.")
        return

    rows = table.find_all("tr")
    data = []

    for row in rows[1:]:
        cols = row.find_all("td")
        if len(cols) < 3:
            continue
        try:
            x = int(cols[0].get_text(strip=True))
            char = cols[1].get_text(strip=True)
            y = int(cols[2].get_text(strip=True))
            data.append((x, y, char))
        except ValueError:
            continue

    if not data:
        print("No valid coordinate data found.")
        return

    max_x = max(x for x, y, c in data)
    max_y = max(y for x, y, c in data)
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

    for x, y, char in data:
        grid[y][x] = char

    for row in grid:
        print(''.join(row))


decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vTER-wL5E8YC9pxDx43gk8eIds59GtUUk4nJo_ZWagbnrH0NFvMXIw6VWFLpf5tWTZIT9P9oLIoFJ6A/pub")
