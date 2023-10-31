export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
    public: {
        Tables: {
            student: {
                Row: {
                    address: string;
                    allergies: string | null;
                    citizen_card: string;
                    contact: string;
                    date_of_birth: string;
                    disease: string | null;
                    district: string;
                    drug: string | null;
                    email: string;
                    firstname: string;
                    id: string;
                    image: string;
                    lastname: string;
                    level: string;
                    name_prefix: string;
                    nationality: string;
                    nickname: string;
                    phone: string;
                    province: string;
                    race: string;
                    religion: string;
                    student_card: string;
                    student_certificate: string;
                    sub_district: string;
                    team_id: string;
                    zipcode: string;
                };
                Insert: {
                    address: string;
                    allergies?: string | null;
                    citizen_card: string;
                    contact: string;
                    date_of_birth: string;
                    disease?: string | null;
                    district: string;
                    drug?: string | null;
                    email: string;
                    firstname: string;
                    id?: string;
                    image: string;
                    lastname: string;
                    level: string;
                    name_prefix: string;
                    nationality: string;
                    nickname: string;
                    phone: string;
                    province: string;
                    race: string;
                    religion: string;
                    student_card: string;
                    student_certificate: string;
                    sub_district: string;
                    team_id: string;
                    zipcode: string;
                };
                Update: {
                    address?: string;
                    allergies?: string | null;
                    citizen_card?: string;
                    contact?: string;
                    date_of_birth?: string;
                    disease?: string | null;
                    district?: string;
                    drug?: string | null;
                    email?: string;
                    firstname?: string;
                    id?: string;
                    image?: string;
                    lastname?: string;
                    level?: string;
                    name_prefix?: string;
                    nationality?: string;
                    nickname?: string;
                    phone?: string;
                    province?: string;
                    race?: string;
                    religion?: string;
                    student_card?: string;
                    student_certificate?: string;
                    sub_district?: string;
                    team_id?: string;
                    zipcode?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: 'student_team_id_fkey';
                        columns: ['team_id'];
                        referencedRelation: 'team';
                        referencedColumns: ['id'];
                    }
                ];
            };
            team: {
                Row: {
                    consent: boolean | null;
                    id: string;
                    name: string;
                    school_name: string;
                    teacher_address: string;
                    teacher_allergies: string | null;
                    teacher_citizen_card: string;
                    teacher_contact: string;
                    teacher_disease: string | null;
                    teacher_district: string;
                    teacher_drug: string | null;
                    teacher_email: string;
                    teacher_firstname: string;
                    teacher_lastname: string;
                    teacher_phone: string;
                    teacher_prefix: string;
                    teacher_province: string;
                    teacher_sub_district: string;
                    teacher_verify: string;
                    teacher_zipcode: string;
                };
                Insert: {
                    consent?: boolean | null;
                    id?: string;
                    name: string;
                    school_name: string;
                    teacher_address: string;
                    teacher_allergies?: string | null;
                    teacher_citizen_card: string;
                    teacher_contact: string;
                    teacher_disease?: string | null;
                    teacher_district: string;
                    teacher_drug?: string | null;
                    teacher_email: string;
                    teacher_firstname: string;
                    teacher_lastname: string;
                    teacher_phone: string;
                    teacher_prefix: string;
                    teacher_province: string;
                    teacher_sub_district: string;
                    teacher_verify: string;
                    teacher_zipcode: string;
                };
                Update: {
                    consent?: boolean | null;
                    id?: string;
                    name?: string;
                    school_name?: string;
                    teacher_address?: string;
                    teacher_allergies?: string | null;
                    teacher_citizen_card?: string;
                    teacher_contact?: string;
                    teacher_disease?: string | null;
                    teacher_district?: string;
                    teacher_drug?: string | null;
                    teacher_email?: string;
                    teacher_firstname?: string;
                    teacher_lastname?: string;
                    teacher_phone?: string;
                    teacher_prefix?: string;
                    teacher_province?: string;
                    teacher_sub_district?: string;
                    teacher_verify?: string;
                    teacher_zipcode?: string;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            education_level: 'year 10' | 'year 11' | 'year 12';
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
