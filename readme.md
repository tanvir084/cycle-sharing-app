### Student Model

    fullName: String (required),
    userName: String (required),
    email: String (required),
    password: String (required),
    phoneNumber: String (required),
    enrolled_courses:[String (optional)]
    created_at: Date,
    updated_at: Date,

### Instructor Model

    fullName: String (required),
    userName: String (required),
    email: String (required),
    password: String (required),
    phoneNumber: String (required),

### Admin Model

    fullName: String (required),
    userName: String (required),
    email: String (required),
    password: String (required),
    phoneNumber: String (required),
    course: [String (optional)],

### Course Model

    title: String,
    course_short_description: String,
    course_description: String,
    instructor: String,
    catagory: Array,
    chapter:[String (optional)],
    course_duration: String,
    enrollement_count: Integer,
    regular_price: Number,
    sale_price: Number,
    tags:[String],
    upload_featured_image: String,
    course_live: {
        type: Boolean
    },
    course_paid:{
        type: Boolean
    }

<<<<<<< HEAD

### Chapter

=======

### Chapter Model

> > > > > > > ab0bcfadcb567f5d8fa7bb1da2899a2a25e54923

    chapter_title: String,
    course_id: String,
    lessons:[
        {
            title: String,
            duration: String,
            url: String,
            description: String,
            attatchment: String,
        }
    ],
    created_at: Date,
    updated_at: Date

### Lesson Model

    title: String,
    url: String,
    course_id: String,
    lesson_duration: String,
    description: String,
    attatchment: String,
    created_at: Date,
    updated_at: Date

### Book Model

    book_name: String,
    book_short_details: String,
    book_details: String,
    author_name: String,
    author_image: String,
    author_description: String,
    book_cover: String,
    book_file: String,

### CourseCategory Model

    category_name: String

### KnownEmail Model

    email: String

<!-- ### PDF Model
    pdf_name: String
    url: String
    writer: String -->

## Student related API endpoints

### Sign Up (Student)

#### Request (Sign Up)

POST /api/auth/signup/student\
Content-Type: application/json

{
"fullName": "Farzana Bashar",\
 "userName": "zerin",\
 "email": "zerin@gmail.com",\
 "phoneNumber": "+8801777777777",\
 "password": "password"
}

#### Response (Sign Up)

HTTP/1.1 201 Created\
X-Powered-By: Express\
Access-Control-Allow-Origin: http://localhost:8081 \
Vary: Origin\
Content-Type: application/json; charset=utf-8\
Content-Length: 166\
ETag: W/"a6-Fc5oJAdmWG5kdIOJDpki4XPyla8"\
Date: Mon, 14 Jun 2021 07:08:32 GMT\
Connection: close

### Sign In (Student)

#### Request (Sign In)

POST /api/auth/signin/student\
Content-Type: application/json

{
"email": "zerin@gmail.com",\
 "password": "password"
}

#### Response (Sign In)

auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJkZTkxZjkxNjE5Yzc0NjIwZjIyZDIiLCJpYXQiOjE2MjM2NTQ3MjUsImV4cCI6MTYyMzY1NDc4NX0.xwtxT7Eln1OrZsIPbf_KqdgI9ypiilRH6T2rszOUXfk\

### Refresh Token (Student)

#### Request (Refresh Token)

POST http://localhost:8080/api/auth/refreshtoken/student \
Content-Type: application/json\
auth-access-token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDA3MGNlZWI3MzFkOWMyYWZmZDMiLCJpYXQiOjE2MjM3NzkzODYsImV4cCI6MTYyMzc3OTQ0Nn0.bFk6Rs-VlxAdckVis4bVUKNJ6T9WEVNMkcSVfsXEdlA\
auth-refresh-token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZTgzYTFhY2IxYzMxNjE3ZDk0OWIiLCJpYXQiOjE2MjM3NzkzODYsImV4cCI6MTYyMzc3OTQ0Nn0.cLEEKK8BAr235f7vI9uZSQQUBBpnnwgCu6Slh5hH1rc

{
"email": "f@gmail.com",\
 "password": "ffffff"
}

#### Response (Refresh Token)

##### if Refresh-token is not expired

HTTP/1.1 200 OK\
X-Powered-By: Express\
Access-Control-Allow-Origin: http://localhost:8081 \
Vary: Origin\
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2OTEsImV4cCI6MTYyMzc4MDc1MX0.2vh5B9efkaGiIiVGwtE9V4mYQj9iobLWmF\_\_EOZrFbE\
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0\
Content-Type: text/html; charset=utf-8\
Content-Length: 31\
ETag: W/"1f-/PCG/cK1zdAISfT1w6rUDO2ZlaU"\
Date: Tue, 15 Jun 2021 18:11:31 GMT\
Connection: close

welcome to the app AGAIN....!!!

##### if Refresh-token is expired

HTTP/1.1 403 Forbidden\
X-Powered-By: Express\
Access-Control-Allow-Origin: http://localhost:8081 \
Vary: Origin\
Content-Type: application/json; charset=utf-8\
Content-Length: 73\
ETag: W/"49-Yugcy1J9osOQ4883zUwTBVYNYnY"\
Date: Wed, 16 Jun 2021 15:56:41 GMT\
Connection: close

{
"message": "Refresh token was expired. Please make a new signin request"
}

### Log Out (Student)

#### Request (Log Out)

POST http://localhost:8080/api/auth/logout/student \
auth-access-token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY\
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

{
"email":"farzana@gmail.com",\
 "password": "farzana"
}

#### Response (Log Out)

{
"success": true,\
 "message": "Logged Out Successfully!"
}

### Update Student

#### Request (Update Student )

PUT: http://localhost:8080/api/student/update/60e2ad6070fe11bbd0b02f36

{
"fullName": "aaa xyz",
"userName": "abs",
"email": "ab@gmail.com",
"phoneNumber": "0171222220000",
"NID":"474993372800",
"Upload_academic_certificate": "b40fc6c4-0eb2-4682-b949-5bd60bbe298e.jpg",
"profile_picture": "b40fc6c4-0egr-4682-b949-5bd60bbe298e.jpg"
}

#### Response (Update Student )

{
"success": true,
"message": "User Data Updated"
}

### Get all Student

#### Request (Get all Student)

GET http://localhost:8080/api/student/get

#### Response (Get all Student)

{
"success": true,
"message": [
{
"enrolled_courses": [],
"\_id": "60e2ad6070fe11bbd0b02f36",
"fullName": "aaa xyz",
"userName": "abs",
"email": "ab@gmail.com",
"password": "$2b$10$UfUme2VTyI0/yTXDJy/2y.UOsEO4sdVe29qAVx0xEnjrZMzwzG5oe",
"phoneNumber": "0171222220000",
"**v": 0,
"NID": "474993372800",
"Upload_academic_certificate": "b40fc6c4-0eb2-4682-b949-5bd60bbe298e.jpg",
"profile_picture": "b40fc6c4-0egr-4682-b949-5bd60bbe298e.jpg",
"updatedAt": "2021-08-04T07:56:12.038Z"
},
{
"enrolled_courses": [],
"\_id": "60e2b53da99a8dbe539f6393",
"fullName": "Farzana ",
"userName": "eqz",
"email": "zia",
"password": "$2b$10$d3Jx9aVhrZ.OUtN/bIJhc.WGytS4NpnKmKEOnnPzhxPmEHQxV671O",
"phoneNumber": "+8801777777777",
"**v": 0
}
]
}

### Delete Student

#### Request (Delete Student)

DELETE http://localhost:8080/api/student/delete/60ecc3c5367ce34ab1f10458

#### Response (Delete Student)

{
"success": true,
"message": "User Data Deleted"
}

## Instructor related API endpoints

### Sign Up (Instructor)

#### Request (Sign Up)

POST /api/auth/signup/instructor \
Content-Type: application/json

{
"fullName": "Fffff Bbbbbb",\
 "userName": "sssss",\
 "email": "s@gmail.com",\
 "phoneNumber": "+8801777777777",\
 "password": "ssssss"
}

#### Response (Sign Up)

HTTP/1.1 201 Created\
X-Powered-By: Express\
Access-Control-Allow-Origin: http://localhost:8081 \
Vary: Origin\
Content-Type: application/json; charset=utf-8\
Content-Length: 178\
ETag: W/"b2-apdWrWT3qPMLjQqQV+L0yVQpfnk"\
Date: Mon, 14 Jun 2021 07:13:31 GMT\
Connection: close

### Sign In (Instructor)

#### Request (Sign In)

POST /api/auth/signin/instructor \
Content-Type: application/json

{
"email": "s@gmail.com",\
 "password": "ssssss"
}

#### Response (Sign In)

HTTP/1.1 200 OK\
X-Powered-By: Express\
Access-Control-Allow-Origin: http://localhost:8081 \
Vary: Origin\
auth-access-token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM2NTQ5OTUsImV4cCI6MTYyMzY1NTA1NX0.Lqev3VMzgoxP-LJS5mMcTCDXqYvx1adlIuqWdaVbpMI\
auth-refresh-token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDI1M2NlZWI3MzFkOWMyYWZmZDYiLCJpYXQiOjE2MjM2NTQ5OTUsImV4cCI6MTYyMzc0MTM5NX0.Wirq7wjrYGclAbXgUo02Da-KPvKW4kZjeTK3Ylvq3oQ\
Content-Type: text/html; charset=utf-8\
Content-Length: 23\
ETag: W/"17-7+5QR8kg9LjZAS7tbdEfSAOtF2A"\
Date: Mon, 14 Jun 2021 07:16:35 GMT\
Connection: close\

Logged In Successfully!

### Refresh Token (Instructor)

#### Request (Refresh Token)

POST http://localhost:8080/api/auth/refreshtoken/instructor \
Content-Type: application/json\
auth-access-token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY\
auth-refresh-token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

{
"email": "s@gmail.com",\
 "password": "ssssss"
}

#### Response (Refresh Token)

##### if Refresh-token is not expired

HTTP/1.1 200 OK\
X-Powered-By: Express\
Access-Control-Allow-Origin: http://localhost:8081 \
Vary: Origin\
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2OTEsImV4cCI6MTYyMzc4MDc1MX0.2vh5B9efkaGiIiVGwtE9V4mYQj9iobLWmF\_\_EOZrFbE\
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0\
Content-Type: text/html; charset=utf-8\
Content-Length: 31\
ETag: W/"1f-/PCG/cK1zdAISfT1w6rUDO2ZlaU"\
Date: Tue, 15 Jun 2021 18:11:31 GMT\
Connection: close

welcome to the app AGAIN....!!!

##### if Refresh-token is expired

HTTP/1.1 403 Forbidden\
X-Powered-By: Express\
Access-Control-Allow-Origin: http://localhost:8081 \
Vary: Origin\
Content-Type: application/json; charset=utf-8\
Content-Length: 73\
ETag: W/"49-Yugcy1J9osOQ4883zUwTBVYNYnY"\
Date: Wed, 16 Jun 2021 15:56:41 GMT\
Connection: close

{
"message": "Refresh token was expired. Please make a new signin request"
}

### Log Out (Instructor)

#### Request (Log Out)

POST http://localhost:8080/api/auth/logout/instructor \
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjU1OTg3NjgsImV4cCI6MTYyNTYwMjM2OH0.kpqsFS9s6kydH6IQbiYceOL9GKz2oTaDFRKfHkvEOuI\
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU0YWIzMDI2ODRlYWRmZWI5Y2E1MzEiLCJpYXQiOjE2MjU1OTg3NjgsImV4cCI6MTYyNTY4NTE2OH0.uZ6QAoHNyeq

{
"email": "s@gmail.com",\
 "password": "ssssss"
}

#### Response (Log Out)

{
"success": true,\
 "message": "Logged Out Successfully!"
}

## Admin Related API

### Sign In (Admin)

#### Request (Sign In)

POST /api/auth/signin/admin\
Content-Type: application/json

{
"email": "zerin@gmail.com",\
 "password": "password"
}

#### Response (Sign In)

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: \*\
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVhMGFjYWQ2NTkxZjE0NDkyY2NhNDAiLCJpYXQiOjE2MjU5NTIxMDYsImV4cCI6MTYyNTk1NTcwNn0.yHU6_cFxVwd8S9iuumAdM8z-rWaYH7-rw9JMrkLKeo8\
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVhMGY2YWJiNTAyNTE0OWQwYTU1OWEiLCJpYXQiOjE2MjU5NTIxMDYsImV4cCI6MTYyNjAzODUwNn0.YY3jdn4p2YFYnPNeIlVG8orFl582K2I7ptOSXteLaqg\
Content-Type: application/json; charset=utf-8\
Connection: close

{
"success": true,
"message": "Logged In Successfully!"
}

### Refresh Token (Admin)

#### Request (Refresh Token)

POST http://localhost:8080/api/auth/refreshtoken/admin \
Content-Type: application/json\
auth-access-token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY\
auth-refresh-token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

{
"email" : "shajal@gmail.com",
"password" : "shajal"
}

#### Response (Refresh Token)

##### if Refresh-token is not expired

HTTP/1.1 200 OK\
X-Powered-By: Express\
Access-Control-Allow-Origin: http://localhost:8081 \
Vary: Origin\
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2OTEsImV4cCI6MTYyMzc4MDc1MX0.2vh5B9efkaGiIiVGwtE9V4mYQj9iobLWmF\_\_EOZrFbE\
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0\
Content-Type: text/html; charset=utf-8\
Content-Length: 31\
ETag: W/"1f-/PCG/cK1zdAISfT1w6rUDO2ZlaU"\
Date: Tue, 15 Jun 2021 18:11:31 GMT\
Connection: close

welcome to the app AGAIN....!!!

##### if Refresh-token is expired

HTTP/1.1 403 Forbidden\
X-Powered-By: Express\
Access-Control-Allow-Origin: http://localhost:8081 \
Vary: Origin\
Content-Type: application/json; charset=utf-8\
Content-Length: 73\
ETag: W/"49-Yugcy1J9osOQ4883zUwTBVYNYnY"\
Date: Wed, 16 Jun 2021 15:56:41 GMT\
Connection: close

{
"message": "Refresh token was expired. Please make a new signin request"
}

### Log Out (Admin)

#### Request (Log Out)

POST http://localhost:8080/api/auth/logout/admin \
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjU1OTg3NjgsImV4cCI6MTYyNTYwMjM2OH0.kpqsFS9s6kydH6IQbiYceOL9GKz2oTaDFRKfHkvEOuI\
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU0YWIzMDI2ODRlYWRmZWI5Y2E1MzEiLCJpYXQiOjE2MjU1OTg3NjgsImV4cCI6MTYyNTY4NTE2OH0.uZ6QAoHNyeq

{
"email" : "shajal@gmail.com",
"password" : "shajal"
}

#### Response (Log Out)

{
"success": true,\
 "message": "Logged Out Successfully!"
}

### GET All Instructors

#### Request (GET All Instructors)

http://localhost:8080/api/instructor/all

#### Response (GET All Instructors)

{
"success": true,
"message": [
{
"course": [
"60eb26bf1882f91b44dbb07a"
],
"\_id": "60c7019bceeb731d9c2affd5",
"name": "ssssss",
"email": "s@gmail.com",
"password": "$2b$10$Qt1JPrBK7Q9qORrW3ku2tuwjV9iR1/65fEfMpwGu0aqzudN.87avu",
"\_\_v": 0
},

        {
            "course": [],
            "_id": "60dccc9d7a5cfaad45847519",
            "fullName": "Fffff Bbbbbb",
            "userName": "sssss4",
            "email": "s4@gmail.com",
            "password": "$2b$10$iA.2xny2X1kOpL1sCPzmtOouzgBkH0FKRjIkKGNqr9gL0ItkRKWc.",
            "phoneNumber": "+8801777777777",
            "__v": 0
        }
    ]

}

### GET All courses by Instructor ID

#### Request (GET All courses by Instructor ID)

http://localhost:8080/api/instructor/course/60c7019bceeb731d9c2affd5

#### Response (GET All courses by Instructor ID)

{
"success": true,
"message": {
"course": [
"60eb26bf1882f91b44dbb07a",
"6103dc5abb86d2fec55d88d6"
],
"\_id": "60c7019bceeb731d9c2affd5"
}
}

### GET Enrolement-Count by Course ID

#### Request (GET Enrolement-Count by Course ID)

http://localhost:8080/api/course/enrolementcount/6103d7100f8b7bfde316df39

#### Response (GET Enrolement-Count by Course ID)

{
"success": true,
"message": {
"\_id": "6103d7100f8b7bfde316df39",
"enrollement_count": 2
}
}

### Add Known-Email

#### Request (Add Known-Email)

http://localhost:8080/api/admin/known/email

{
"email": "abcs@gmail.com"
}

#### Response (Add Known-Email)

{
"success": true,
"message": "Email Added",
"id": "6102e99fc72942f43420745c"
}

### Course Create

#### Request (Course Create)

POST http://localhost:8080/api/course/post
Content-Type: application/json
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

{
"title": "C++ for beginners",
"course_short_description": "course's short-description",
"course_description": "Course for beginners",
"catagory": "Programming",

<!-- "chapter_id": "id", -->

"regular_price": 400,
"sale_price": 300,
"enrolement_count": 2,
"course_live": false,
"course_paid": false,
"upload_featured_image":" www.kerkjcndkekn"
}

#### Response (Course Create)

{"message": "courses are saved. id: 60ec02427da5962c25ac21e6"}

### Course Update

#### Request (Course Update)

PUT http://localhost:8080/api/course/update/60cefa897278675458e3e15a //course_id

Content-Type: application/json
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

{
"title": "C++ for beginners",
"course_short_description": "course's edited short-description",
"course_description": "Course for beginners",
"instructorId": "12345"
"catagory": "Programming",
"regular_price": 400,
"sale_price": 300,
"enrolement_count": 2,
"course_live": false,
"course_paid": false,
"upload_featured_image":" www.kerkjcndkekn"
}

#### Response (Course Update)

{"message": "Course Updated. id: 60ec02427da5962c25ac21e6"}

### Course Delete

#### Request (course Delete)

DELETE http://localhost:8080/api/course/delete/60cefa897278675458e3e15a //course_id

Content-Type: application/json
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

#### Response (course Delete)

{"message": "Course Deleted"}

### Get All Courses

#### Request (Get All Courses)

DELETE http://localhost:8080/api/course/get

Content-Type: application/json
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

#### Response (Get All Courses)

{
"message": [
{
"chapter": [],
"instructor": {
"name": "ssssss"
},
"catagory": "Programming",
"subject": "Programming2"
},
{
"chapter": [],
"instructor": {
"name": "ssssss"
},
"catagory": "Programming",
"subject": "Programming2"
},
{
"chapter": [],
"instructor": {
"name": "ssssss"
},
"catagory": "Programming",
"subject": "Programming2"
}

    ]

}

### Get Specific Course

#### Request (Get Specific Course)

GET http://localhost:8080/api/course/get/60e4b8b22e08e10463a33166

#### Response (Get Specific Course)

{
"success": true,
"message": {
"chapter": [
"60d0b6f4307a3f680bec2bed",
"60da335b8a9e509388addc09"
],
"tag": [],
"\_id": "60e4b8b22e08e10463a33166",
"title": "C++ for beginners",
"instructor": "60ced7a5c732855070df3e10",
"catagory": "Programming",
"subject": "Language",
"enrollement_count": 10,
"\_\_v": 0
}
}

### Get Top Courses

#### Request (Get Top Courses)

GET http://localhost:8080/api/topcourses

#### Response (Get Top Courses)

[
{
"chapter": [],
"\_id": "60e4bf022e08e10463a3316b",
"title": "Python for beginners",
"instructor": "60c7019bceeb731d9c2affd5",
"catagory": "Programming",
"subject": "Programming Language",
"enrollement_count": 22,
"**v": 0
},
{
"chapter": [],
"\_id": "60e4becc2e08e10463a33169",
"title": "Python for beginners",
"instructor": "60c7019bceeb731d9c2affd5",
"catagory": "Programming",
"subject": "Programming Language",
"enrollement_count": 16,
"**v": 0
}
]

### PUSH/POST course catagory

#### Request (PUSH/POST course catagory)

POST http://localhost:8080/api/course/catagory

    {

    "course_category": "Physics"

    }

#### Response (PUSH/POST course catagory)

{
<<<<<<< HEAD
"success": true,
"message": "Course catagory is added"
=======
"success": true,
"message": "Course catagory is added",
"id": "610310e0c6f1a1f94152c67e"
}

### GET all course catagory

#### Request (GET all course catagory)

POST http://localhost:8080/api/course/category/all

#### Response (GET all course catagory)

{
"success": true,
"message": [
{
"_id": "610310c1c6f1a1f94152c67a",
"category_name": "Programming",
"__v": 0
},
{
"_id": "610310e0c6f1a1f94152c67e",
"category_name": "Physics",
"__v": 0
}
]

> > > > > > > ab0bcfadcb567f5d8fa7bb1da2899a2a25e54923
> > > > > > > }

### Chapter Create

#### Request (Chapter Create)

POST http://localhost:8080/api/chapter/post/60d0b6637a3d8c67f3535d4d //course_id

Content-Type: application/json
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

{
"chapter_title": "How to add two numbers in C++",
"chapter_duration": 20,
"lesson_title": "'float' in C++",
"lesson_duration": "25 min",
"lesson_url": "www.djejecjbjebjnvjnknke",
"lesson_description": "description of C++",
"lesson_attatchment": "www.ernernnwn"
}

#### Response (Chapter Create)

{"message": "Chapter Added. id: 60ec02427da5962c25ac21e6"}

### Chapter Update

#### Request (Chapter Update)

PUT http://localhost:8080/api/chapter/update/60d0b6637a3d8c67f3535d4d //chapter_id

Content-Type: application/json
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

{
"chapter_title": "basic C++",
"chapter_duration": 20,
"lesson_title": "'float' in C++",
"lesson_duration": "25 min",
"lesson_url": "www.djejecjbjebjnvjnknke",
"lesson_description": "description of C++",
"lesson_attatchment": "www.ernernnwn"
}

#### Response (Chapter Update)

{"message": "Chapter Updated. id: 60ec02427da5962c25ac21e6"}

### Chapter Delete

#### Request (Chapter Delete)

DELETE http://localhost:8080/api/chapter/delete/60cefa897278675458e3e15a //chapter_id

Content-Type: application/json
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

{
"id": "60e4b8b22e08e10463a33166" //course_id
}

#### Response (Chapter Delete)

{
"message": "Chapter is deleted successfully"
}

### Get All Chapters

#### Request (Get All Chapters)

DELETE http://localhost:8080/api/chapter/get

Content-Type: application/json
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

#### Response (Get All Chapters)

{
"message": [
{
"course_id": "60d0b6637a3d8c67f3535d4d",
"lessons": [
{
"_id": "60d0b6f4307a3f680bec2bee",
"title": "use of '+' operator",
"duration": "25 min",
"url": "www.djejecjbje/?bjnvj"
},
{
"_id": "60d0b740307a3f680bec2bef",
"title": "'int' in C++",
"duration": "25 min",
"url": "www.djejecjbjebjnvjnknke"
}
]
}
]
}

<<<<<<< HEAD

### Lesson Update

=======

### Get Specific Chapter

#### Request(Get Specific Chapter)

GET http://localhost:8080/api/chapter/get/60d0b6f4307a3f680bec2bed //chapter_id

### Response(Get Specific Chapter)

{
"success": true,
"message": {
"\_id": "60d0b6f4307a3f680bec2bed",
"course_id": "60d0b6637a3d8c67f3535d4d",
"lessons": [
{
"_id": "60d0b740307a3f680bec2bef",
"title": "'int' in C++",
"duration": "25 min",
"url": "www.djejecjbjebjnvjnknke"
},
{
"_id": "60da248c1ed9d18f65197b41",
"title": "'string' in C++",
"duration": "35 min",
"url": "www.djejecjbjebjnvjjdfnke"
}
],
"\_\_v": 0,
"chapter_title": "Basic C++",
"updatedAt": "2021-07-12T17:42:54.072Z"
}
}

### Get Specific Chapter's Lesson

#### Request(Get Specific Chapter's Lesson)

GET http://localhost:8080/api/chapter/lessons/get/60d0b6f4307a3f680bec2bed //chapter_id

### Response(Get Specific Chapter's Lesson)

{
"success": true,
"message": {
"\_id": "60d0b6f4307a3f680bec2bed",
"lessons": [
{
"_id": "60d0b6f4307a3f680bec2bee",
"title": "use of '+' operator",
"duration": "25 min",
"url": "www.djejecjbje/?bjnvj"
},
{
"_id": "60d0b740307a3f680bec2bef",
"title": "'int' in C++",
"duration": "25 min",
"url": "www.djejecjbjebjnvjnknke"
},
{
"_id": "60da248c1ed9d18f65197b41",
"title": "'string' in C++",
"duration": "35 min",
"url": "www.djejecjbjebjnvjjdfnke"
}
]
}
}

### Lesson Update

> > > > > > > dc8f7894227e9d8eb9664a335422a2af330e496b

#### Request (Lesson Update)

PUT http://localhost:8080/api/lesson/update/60d0b6637a3d8c67f3535d4d //chapter_id

Content-Type: application/json
auth-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MDE5YmNlZWI3MzFkOWMyYWZmZDUiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Tno8h2NxruWdIxzypPVAoI_IRXDx2wU1WxSe5-20UjY
auth-refresh-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4ZWQzZjc3ZjdlNDMyN2RlMmRiZGMiLCJpYXQiOjE2MjM3ODA2NzEsImV4cCI6MTYyMzc4MDczMX0.Q4YHVS52MEs73fiOyW0xuEezt3c2YlR6QMH_cHwpOV0

{
"lesson_title": "'float' in C++",
"lesson_duration": "25 min",
"lesson_url": "www.djejecjbjebjnvjnknke",
"lesson_description": "description of C++",
"lesson_attatchment": "www.ernernnwn"
}

#### Response (Lesson Update)

{"message": "lesson Updated. id: 60ec02427da5962c25ac21e6"}

<<<<<<< HEAD

### Lesson Delete

#### Request (Lesson Delete)

# DELETE http://localhost:8080/api/lesson/delete/60cefa897278675458e3e15a //chapter_id

### Specific Lesson Update

#### Request (Lesson Update)

PUT http://localhost:8080/api/lesson/update/60d0b6f4307a3f680bec2bed/60d0b6f4307a3f680bec2bee //chapter_id/lesson_id

> > > > > > > b56869274593fd49f42c85551b967e62d522af69

Content-Type: application/json

{
<<<<<<< HEAD
"\_id": "60d38f2f475e0f72c6bc7e7c"  
} //lesson_id
=======
"lesson_title": "'float' in C++",
"lesson_duration": "25 min",
"lesson_url": "www.djejecjbjebjnvjnknke",
"lesson_description": "description of C++",
"lesson_attatchment": "www.ernernnwn"
}

#### Response (Lesson Update)

{"message": "lesson Updated. id: 60ec02427da5962c25ac21e6"}

### Lesson Delete

#### Request (Lesson Delete)

DELETE http://localhost:8080/api/lesson/delete/60cefa897278675458e3e15a/60edebe84d23405912cdb8d4 //chapter_id/lesson_id

Content-Type: application/json

> > > > > > > b56869274593fd49f42c85551b967e62d522af69

#### Response (Lesson Delete)

{
"message": "Chapter is deleted successfully"
}

### Get All Lessons

#### Request (Get All Lessons)

http://localhost:8080/api/lesson/getall/60d0b6f4307a3f680bec2bed //chapter_id

#### Response (Get All Lessons)

{
"success": true,
"message": {
"lessons": [
{
"_id": "60d0b6f4307a3f680bec2bee",
"title": "use of '+' operator",
"duration": "25 min",
"url": "www.djejecjbje/?bjnvj"
},
{
"_id": "60d0b740307a3f680bec2bef",
"title": "'int' in C++",
"duration": "25 min",
"url": "www.djejecjbjebjnvjnknke"
},
{
"_id": "60da248c1ed9d18f65197b41",
"title": "'string' in C++",
"duration": "35 min",
"url": "www.djejecjbjebjnvjjdfnke"
}
]
}
}

### Get Specific Lesson from Chapter

#### Request

http://localhost:8080/api/lesson/get/60d0b6f4307a3f680bec2bed/60e2bdf801fb77bf6b79b3f7 //chapter_id/lesson_id

#### Response

{
"success": true,
"message": {
"\_id": "60d0b6f4307a3f680bec2bed",
"lessons": [
{
"_id": "60e2bdf801fb77bf6b79b3f7",
"title": "'Sum' in C++",
"duration": "35 min",
"url": "www.djejecjbjebjnvjjdfnke"
}]}}

### Get Specific Book info

#### Request (Get Specific Book info)

GET http://localhost:8080/api/book/get/60e89918f4aa35ffa7b33f19

#### Response (Get Specific Book info)

{
"success": true,\
 "message": {
"\_id": "60e89918f4aa35ffa7b33f19",\
 "book_name": "introduction to C++",\
 "book_details": "book on C++ proggraming language",\
 "writter_name": "Mr. CC",\
 "book_url": "www.jdkjvndvsnnnclhfduhknnnfn",\
 "\_\_v": 0
}
}

### Get All Book info

#### Request (Get All Book)

GET http://localhost:8080/api/book/getall

#### Response (Get All Book)

{
"success": true,
"message": [
{
"\_id": "60e89918f4aa35ffa7b33f19",
"book_name": null,
"book_details": null,
"author_name": null,
"book_cover": null,
"\_\_v": 0
},

        {
            "_id": "6106cc5defd1a0492c458e01",
            "book_name": "xyz",
            "book_short_details": "short details",
            "book_details": "details",
            "author_name": "abc",
            "book_cover": "edf4e345-f092-45ae-873d-8f3302010bc2.png",
            "book_file": "edf4e345-f092-45ae-873d-8f3302010bc2.pdf",
            "__v": 0
        }
    ]

}

### Post Book

#### Request (Post Book)

POST http://localhost:8080/api/book/post

{
"book_name": "xyz",
"book_short_details": "short details",
"book_details": "details",
"author_name": "abc",
"book_cover": "edf4e345-f092-45ae-873d-8f3302010bc2.png",
"book_file": "edf4e345-f092-45ae-873d-8f3302010bc2.pdf"
}

#### Response (Post Book)

{
"success": true,\
 "massage": "Book is saved"
}

### Delete one Book using Id

#### Request (Delete one Book using Id)

DELETE http://localhost:8080/api/book/delete/60e87627829aa1fd57528906

#### Response (Delete one Book using Id)

{
"success": true,\
 "message": "Book is deleted"
}

#### Update Book using Id

#### Request (Update Book using Id)

PUT http://localhost:8080/api/book/update/60e89918f4aa35ffa7b33f19

{
"book_name": "xyz",
"book_short_details": "short details",
"book_details": "details",
"author_name": "abc",
"book_cover": "edf4e345-f092-45ae-873d-8f3302010bc2.png",
"book_file": "edf4e345-f092-45ae-873d-8f3302010bc2.pdf"
}

#### Response (Update Book using Id)

{
"success": true,\
 "message": "updated"
}

#### Book Upload (pdf/jpg)

#### Request (Book Upload)

POST http://localhost:8080/api/book/upload

#### Response (Book Upload))

{
"ETag": "\"a12f31aace56e02e54c493564d121ab7\"",
"Location": "https://lms-image-bucket.s3.ap-southeast-1.amazonaws.com/edf4e345-f092-45ae-873d-8f3302010bc2.png",
"key": "edf4e345-f092-45ae-873d-8f3302010bc2.png",
"Key": "edf4e345-f092-45ae-873d-8f3302010bc2.png",
"Bucket": "lms-image-bucket"
}

#### Book Download (pdf/jpg)

#### Request (Book Download )

GET http://localhost:8080/api/book/download/63ffd564-3223-48ac-8a4b-8b6eb835945c.pdf //key

#### Response (Book Download )

downloaded file

### Students Enrolled for Courses

#### Request

POST http://localhost:8080/api/enrolment/60eb214d21b55019f863c2fa //course_id

{
"email": "zerin@gmail.com"
}

#### Response

{
"success": true,
"message": "Enrolled for the course"
}

### Get All Enrolled Courses

GET http://localhost:8080/api/enrolement/coursedetails

#### Request

{
"email": "zerin@gmail.com"
}

#### Response

{
"success": true,
"message": {
"enrolled_courses": [
"60eb214d21b55019f863c2fa"
],
"\_id": "60ecc3c5367ce34ab1f10458"
}
}
