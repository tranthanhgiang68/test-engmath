export interface LeadFormInput {
  fullName: string;
  phone: string;
  email: string;
  improvementSkills: string[];
  otherSkillText?: string;
}

export interface WebhookPayload {
  fullName: string;
  phone: string;
  email: string;
  skills: string;
  submittedAt: string;
  sourceUrl: string;
}
