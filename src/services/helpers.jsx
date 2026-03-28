const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Helpers = {
    ValiditeEmail(email){
        return emailRegex.test(email);
    },
     ValiditePassword(password){
        return password.length >= 8;
    },
     ValiditeName(name){
        return name.length > 3;
    }

}
