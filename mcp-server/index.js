import {McpServer} from "@modelcontextprotocol/sdk/server/mcp";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {z} from "zod";
const server=new McpServer({
    name:"Weather Server",
    version:"1.0.0",
})
async function  getWeatherByCity(city){
    if(city.toLowerCase()==="delhi"){
        return {temp:"30C", forecast:"High chances of Rain"}
    }
    if(city.toLowerCase()==="kashmir"){
        return {temp:"7C", forecast:"High chances of Snowfall"}
    }
    return {temp:null,error:"Unable to get weather"}
}
server.tool('getWeatherByCityName',
    {
    city:z.string()
   },
    async ({city})=>{
    return {content: [{ type: "text", text:JSON.stringify(await getWeatherByCity(city)) }]};
    }
)

async function init(){
    const transport  = new StdioServerTransport()
    await server.connect(transport);
}


init()
