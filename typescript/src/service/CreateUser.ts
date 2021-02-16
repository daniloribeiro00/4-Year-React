interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    nome?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
    // techs: string[];
}

export default function createUser({nome = '', email, password, techs}: CreateUserData) {
    const user = {
        nome,
        email,
        password,
        techs,
    };

    return user;
}