export async function getSurah() {
    const res = await fetch('https://equran.id/api/v2/surat')
    const data = await res.json()

    return data.data
}