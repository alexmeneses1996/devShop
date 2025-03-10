export const getImageURL = async (file) =>{
    const formData = new FormData();
    formData.append("upload_preset","fprince_preset")
    formData.append("file",file)

    const resp =  await fetch("https://api.cloudinary.com/v1_1/dqgbna4ni/upload",{
        method:"POST",
        body:formData
    })

    const data = await resp.json();
    return data.secure_url;
}




//logo
//https://res.cloudinary.com/dqgbna4ni/image/upload/v1741628604/ceai9i4i00s62pmk6jac.png