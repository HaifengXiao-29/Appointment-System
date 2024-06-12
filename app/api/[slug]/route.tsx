


export async function POST(req, {params}){
    let res = {message : 'Invalid request'}
    const slug = params.slug
    if (slug === 'post-form-data'){
        const data = await req.formData()
        const name = data.get('name')

        if (!name){
            res  = {message: 'please fill out the name'}
        }else {
            res = {message: 'Saved'}
        }
        return Response.json(res)
    }else {
        res = {message: 'wrong address'}
        return Response.json(res)
    }
}