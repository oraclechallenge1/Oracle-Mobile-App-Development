export type UserProfile = {
  username: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  unit: string;     
  avatar?: string;  
};

const USERS: UserProfile[] = [
  {
    username: 'admin',
    name: 'Matheus Silva',
    role: 'Administrador',
    email: 'admin@medsave.com',
    phone: '(81) 99999-0001',
    unit: 'UPA Recife',
  },
  {
    username: 'maria',
    name: 'Maria Oliveira',
    role: 'Enfermeira',
    email: 'maria.oliveira@medsave.com',
    phone: '(81) 99999-0002',
    unit: 'UBS Boa Viagem',
  },
  {
    username: 'joao',
    name: 'João Pereira',
    role: 'Farmacêutico',
    email: 'joao.pereira@medsave.com',
    phone: '(81) 99999-0003',
    unit: 'Hospital Central',
  },
];

export async function getUserByUsername(username: string) {
  return USERS.find(u => u.username.toLowerCase() === username.toLowerCase()) || null;
}
