# /test
# GET
success: {
    "im working!"
}

# /convert
# POST
parameters: {
    name: {name to save file as},
    python {python code here}
}

success: {
    {converted javascript code}
}

fail: {
    err: {err_msg}
}