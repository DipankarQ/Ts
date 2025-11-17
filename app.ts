// // enum in ts
// enum DirectionType {
//     Up = "UP", //0
//     Down = "DOWN", //1
//     Left = "LEFT", //2
//     Right = "RIGHT" //3
// }



// function move(direction: DirectionType) {
//     switch (direction) {
//         case  DirectionType.Up:
//             return "Moving Up";
//         case  DirectionType.Down:
//             return "Moving Down";
//         case  DirectionType.Left:
//             return "Moving Left";
//         case  DirectionType.Right:
//             return "Moving Right";
//     }
// }



// console.log(DirectionType.Up);    // Output: UP
// console.log(DirectionType.Down);


// console.log(move(DirectionType.Left));  // Output: Moving Left


enum ApiResponse {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
    Unauthorized = 401
}


// Using Loop to get all enum values

// Looping over  Keys and values of enum

// for(let response in ApiResponse) {
//     console.log(response, ":", ApiResponse[response as keyof typeof ApiResponse]);
// }

// console.log('---');



// Filtering only numeric values from enum

// for(let response in ApiResponse){
//     if(isNaN(Number(response))){
//         console.log(response, ":", ApiResponse[response as keyof typeof ApiResponse]);
//     }
// }





// For String Enums
// enum ApiResponseType {
//     Success = "SUCCESS",
//     Error =  "ERROR",
//     NotFound = "NOT_FOUND",
//     Unauthorized = "UNAUTHORIZED"
// }

// for(let response in ApiResponseType) {
//     console.log(response, ":", ApiResponseType[response as keyof typeof ApiResponseType]);
// }



// Using function to get message based on enum value's



// function getApiResponseMessage(responseCode: ApiResponse) {
//     if(responseCode === ApiResponse.Success) {
//         return "Request was successful.";

//     } else if(responseCode === ApiResponse.NotFound) {
//         return "Resource not found.";
//     } else if(responseCode === ApiResponse.ServerError) {
//         return "Internal server error.";
//     } else if(responseCode === ApiResponse.Unauthorized) {
//         return "Unauthorized access.";
//     } else {
//         return "Unknown response code.";
//     }
// }

// // Log numeric value
// console.log('Value:', ApiResponse.Success); // 200

// // Reverse map number → name (works for numeric enums)
// console.log('Name:', ApiResponse[ApiResponse.Success]); // "Success"

// // Use your message helper
// console.log('Message:', getApiResponseMessage(ApiResponse.Success)); // "Request was successful."
// console.log('Message:', getApiResponseMessage(ApiResponse.NotFound)); // "Resource not found."






