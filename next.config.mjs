import path from 'path';
export default { reactStrictMode:true, typescript:{ignoreBuildErrors:true}, eslint:{ignoreDuringBuilds:true}, webpack:(c)=>{ c.resolve.alias['@']=path.resolve(__dirname); return c; }};
