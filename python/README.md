# python-monorepo

Python monorepo intended for learning all things python

## environment

### Install pip if not installed

```bash

```

### Install venv if not installed

```bash
sudo apt update
sudo apt install python3.10-venv
```

### create .venv

In project workspace execute

```bash
python -m venv .venv
```

### vscode settings

Add the following line to worspace settings

```json
"python.terminal.activateEnvironment": true
```

### activate .venv manually

```bash
source .venv/bin/activate
```

### restore requirements

```bash
pip install -r requirements.txt
```
