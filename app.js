import express from "express";
import fetch from "node-fetch";
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/fetch', async (req, res) => {
    const key = '757610d9b20246f494bd9fedf8c51e99'
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
    const { sidoCode, sggCode } = req.query
    console.log(sidoCode)
    const response = await fetch(`https://e-childschoolinfo.moe.go.kr/api/notice/basicInfo.do?key=${key}&sidoCode=${sidoCode}&sggCode=${sggCode}`)
    const result = await response.json()
    console.log(result)
    res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})