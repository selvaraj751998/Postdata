class responseHandler{
    static Response(res,data,statusCode){
        switch(statusCode){
            case 200:
                res.status(200).json({
                    statusCode : statusCode,
                    Message : "OK",
                    data : data
                });
                break;
            case 400:
                res.status(400).json({
                    statusCode : statusCode,
                    Message : "Bad Request",
                    data : data
                });
                break;
            case 401:
                res.status(401).json({
                    statusCode : statusCode,
                    Message : "Unauthorized",
                    data : data
                });
                break;
            case 404:
                res.status(404).json({
                    statusCode : statusCode,
                    Message : "Page Not Found",
                    data : data
                });
                break;
            case 500:
                res.status(500).json({
                    statusCode : statusCode,
                    Message : "Internal Server Error",
                    data : data
                });
                break;
            default:
                res.status(500).json({
                    statusCode : statusCode,
                    Message : "Internal Server Error",
                    data : data
                });
                break;
        }
    }
}

module.exports = responseHandler;