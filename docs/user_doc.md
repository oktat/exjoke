# User documentation

## Install dependencies

```cmd
pnpm install
```

## Endpoints

All endpoint have a /api prefix.

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| /register | POST  | no |  create user |
| /login    | POST  | no |  login  |
| /users    | GET   | no |  read users |
| jokes     | GET   | no |  read jokes |
| jokes     | POST  | no |  create joke |


## Create joke

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| jokes     | POST  | no |  create joke |

The body content a JSON, for example:

```json
{
    text: 'The joke content',
    sender: 'Name',
    category: 1
}
```
