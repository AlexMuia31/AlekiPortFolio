import axios from 'axios';


export const Jobs = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/main/jobs/')
            .then(function (response) {
                // handle success
                console.log(response);
            })
        return response;
    }
    catch (error) {
        console.log(error)
    }
}


