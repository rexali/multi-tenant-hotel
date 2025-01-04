import mongoose from "mongoose";
import TenantModel  from "./app/lib/model.tenant";

const data = [
    { name: 'Tenant 1', subdomain: 'tenant1', },
    { name: 'Tenant 2', subdomain: 'tenant2' },
    { name: 'Test', subdomain: 'test' },
];

async function main() {
    try {
        const docs = await TenantModel.insertMany(data);
        console.log(docs);
    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}
 export { main };