export const getMuscle = async () =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {next: {revalidate: 15}});
    const data = await res.json();
    return data;
}