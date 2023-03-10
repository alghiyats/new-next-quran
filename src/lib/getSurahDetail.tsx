import { listSurah } from '../interfaces';

export async function getSurahDetail(id: number): Promise<listSurah> {
    const res = await fetch(`https://equran.id/api/v2/surat/${id}`);
    const data = await res.json();
    return data.data
}
