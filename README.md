# Trigger webhook task

This action call be used to call POST requests with json body and headers.

## Inputs

### `url`

**Required** The url of the webhook to be triggered.

### `json`

JSON to send in the request body

### `headers`

Headers to send in the request

## Example usage

```yaml
uses: magdemajt/trigger-webhook@v1
with:
  url: 'https://example.com'
  json: '{"foo": "bar"}' # optional
  headers: '{"Content-Type": "application/json"}' # optional 
```
