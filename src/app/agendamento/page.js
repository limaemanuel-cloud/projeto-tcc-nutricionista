import db from '@/lib/db';
export default async () => {
     const consumidores =  await db.query("select * from consumido");

     return (<><h1>consumidores</h1>
        <ol>
             {consumidores.map(consumidores => <li>{consumidores.nome}</li>)}
           <li></li>
        </ol>
    </>
 )
}
 