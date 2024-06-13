export async function POST(req, {params}){
    let res = {message : 'Invalid request'}
    const slug = params.slug
    if (slug === 'post-calendar-events'){
        const data = await req.formData()
        const name = data.get('name')
        const temp = data.get('hours')


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


export async function GET(req, {params}){
    let res = {message : 'Invalid request'}
    const slug = params.slug
    if (slug === 'get-calendar-events'){
        return Response.json(res)
    }
}