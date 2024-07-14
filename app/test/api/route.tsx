
export async function POST(req){
    let res = {message : 'Invalid request'}
    const data = await req.formData()
    const name = data.get('name')

    if (!name){
        res  = {message: 'please fill out the name'}
    }else {
        res = {message: 'Saved'}
    }
    return Response.json(res)
}