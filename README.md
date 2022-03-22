# Rest-API

### Response (GET Method) -->
    1. Header --> Code , Status , Massage
    2. Body --> JSON , DATA insert Massage
    3. Cookies --> Cookie Encryption/Decryption and others policies...


### Request (POST Method) -->
    1. JSON Array/Object pattern
    2. Type of image/audio/video


## API SECURITY -->
    1. Key Verification .
    2. User Agent Verification .
    3. CSRF Protection.
    4. Rate Limiting.
    5. Data Sanitization.
    6. Authentication/Authorization.
    7. HTTP Secure Header.


### Form mongodb -->
we know mongodb always create objectId -->
    for example : _id: ObjectId(7df78ad8902c)
        7df78ad8902c is 12 bytes hexadecimal number.
            1. First 4 bytes (7df7) --> Current Timestamp.
            2. Next 3 bytes (8ad) --> Machine ID.
            3. Next 2 bytes (89) --> Process ID.
            4. Last 3 bytes (02c) --> Incremental Value.