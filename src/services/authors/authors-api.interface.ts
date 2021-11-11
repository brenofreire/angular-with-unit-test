export interface AuthorsApiRequest {
  authorName: string;
  bookName?: string;
}

export interface AuthorsApiResponse {
  numFound: number;
  numFoundExact: true;
  start: number;
  docs: {
    alternate_names: string[];
    birth_date: string[];
    key: string[];
    name: string[];
    top_subjects: string[];
    top_work: string[];
    type: string[];
    work_count: number;
    _version_: number;
  }[];
}
