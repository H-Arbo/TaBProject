import Doctor from '../models/doctorModel.js'



const registerDoc = async (request, response) => {
    try {
        const {name, email, password} = request.body;
        // check name
        if(!name){
            return response.json({
                error: 'name required'
            })
        };
        //check password: no password or password length is < 8 characters
        if(!password || password.length <8){
            return response.json({
                error: 'password required (min 8 characters)'
            })
        };
        //check if email is new
        const existEmail = await Doctor.findOne({email});

        if(existEmail){
            return response.json({
                error: 'account already exists for this email'
            })
        }

        const newDoctor = await Doctor.create({
            email,
            name,
            password
        })
        return response.json(newDoctor);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

export default {
    
    registerDoc, 

}
