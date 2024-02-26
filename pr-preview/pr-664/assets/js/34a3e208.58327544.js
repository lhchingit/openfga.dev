"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[5863],{78538:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var t=i(85893),s=i(11151),l=i(5270),r=i(74866),a=i(85162);const d={title:"Update Relationship Tuples",sidebar_position:3,slug:"/getting-started/update-tuples",description:"Updating system state by writing and deleting relationship tuples"},o="Update Relationship Tuples",c={id:"content/getting-started/update-tuples",title:"Update Relationship Tuples",description:"Updating system state by writing and deleting relationship tuples",source:"@site/docs/content/getting-started/update-tuples.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/update-tuples",permalink:"/pr-preview/pr-664/docs/getting-started/update-tuples",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/update-tuples.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Update Relationship Tuples",sidebar_position:3,slug:"/getting-started/update-tuples",description:"Updating system state by writing and deleting relationship tuples"},sidebar:"docs",previous:{title:"Configure Authorization Model",permalink:"/pr-preview/pr-664/docs/getting-started/configure-model"},next:{title:"Perform a Check",permalink:"/pr-preview/pr-664/docs/getting-started/perform-check"}},h={},u=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Configure The <ProductName></ProductName> API Client",id:"01-configure-the--api-client",level:3},{value:"02. Calling Write API To Add New Relationship Tuples",id:"02-calling-write-api-to-add-new-relationship-tuples",level:3},{value:"03. Calling Write API To Delete Relationship Tuples",id:"03-calling-write-api-to-delete-relationship-tuples",level:3},{value:"Related Sections",id:"related-sections",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"update-relationship-tuples",children:"Update Relationship Tuples"}),"\n",(0,t.jsx)(l.AH,{}),"\n",(0,t.jsxs)(n.p,{children:["This section will illustrate how to update ",(0,t.jsx)(n.em,{children:(0,t.jsx)(l.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,t.jsxs)(r.Z,{groupId:"languages",children:[(0,t.jsx)(a.Z,{value:l.eU.JS_SDK,label:l.UB.get(l.eU.JS_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.YY,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.Z,{value:l.eU.GO_SDK,label:l.UB.get(l.eU.GO_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.YY,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.Z,{value:l.eU.DOTNET_SDK,label:l.UB.get(l.eU.DOTNET_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.YY,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.Z,{value:l.eU.PYTHON_SDK,label:l.UB.get(l.eU.PYTHON_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.YY,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.Z,{value:l.eU.JAVA_SDK,label:l.UB.get(l.eU.JAVA_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.YY,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.Z,{value:l.eU.CLI,label:l.UB.get(l.eU.CLI),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.YY,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_SERVER_URL"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.YY,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-664/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,t.jsxs)(n.p,{children:["Assume that you want to add user ",(0,t.jsx)(n.code,{children:"user:anne"})," to have relationship ",(0,t.jsx)(n.code,{children:"reader"})," with object ",(0,t.jsx)(n.code,{children:"document:Z"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{\n  user: 'user:anne',\n  relation: 'reader',\n  object: 'document:Z',\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"01-configure-the--api-client",children:["01. Configure The ",(0,t.jsx)(l.rZ,{format:l.v7.ShortForm})," API Client"]}),"\n",(0,t.jsx)(n.p,{children:"Before calling the write API, you will need to configure the API client."}),"\n",(0,t.jsxs)(r.Z,{groupId:"languages",children:[(0,t.jsx)(a.Z,{value:l.eU.JS_SDK,label:l.UB.get(l.eU.JS_SDK),children:(0,t.jsx)(l.j3,{lang:l.eU.JS_SDK})}),(0,t.jsx)(a.Z,{value:l.eU.GO_SDK,label:l.UB.get(l.eU.GO_SDK),children:(0,t.jsx)(l.j3,{lang:l.eU.GO_SDK})}),(0,t.jsx)(a.Z,{value:l.eU.DOTNET_SDK,label:l.UB.get(l.eU.DOTNET_SDK),children:(0,t.jsx)(l.j3,{lang:l.eU.DOTNET_SDK})}),(0,t.jsx)(a.Z,{value:l.eU.PYTHON_SDK,label:l.UB.get(l.eU.PYTHON_SDK),children:(0,t.jsx)(l.j3,{lang:l.eU.PYTHON_SDK})}),(0,t.jsx)(a.Z,{value:l.eU.JAVA_SDK,label:l.UB.get(l.eU.JAVA_SDK),children:(0,t.jsx)(l.j3,{lang:l.eU.JAVA_SDK})}),(0,t.jsx)(a.Z,{value:l.eU.CLI,label:l.UB.get(l.eU.CLI),children:(0,t.jsx)(l.j3,{lang:l.eU.CLI})}),(0,t.jsxs)(a.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),children:[(0,t.jsxs)(n.p,{children:["To obtain the ",(0,t.jsx)(n.a,{href:"https://auth0.com/docs/authorization/flows/call-your-api-using-the-client-credentials-flow",children:"access token"}),":"]}),(0,t.jsx)(l.j3,{lang:l.eU.CURL})]})]}),"\n",(0,t.jsx)(n.h3,{id:"02-calling-write-api-to-add-new-relationship-tuples",children:"02. Calling Write API To Add New Relationship Tuples"}),"\n",(0,t.jsx)(n.p,{children:"To add the relationship tuples, we can invoke the write API."}),"\n",(0,t.jsx)(l.Gb,{relationshipTuples:[{user:"user:anne",relation:"reader",object:"document:Z"}],skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK,l.eU.JAVA_SDK,l.eU.CLI,l.eU.CURL]}),"\n",(0,t.jsx)(n.h3,{id:"03-calling-write-api-to-delete-relationship-tuples",children:"03. Calling Write API To Delete Relationship Tuples"}),"\n",(0,t.jsx)(n.p,{children:"To delete relationship tuples, we can invoke the write API."}),"\n",(0,t.jsxs)(n.p,{children:["Assume that you want to delete user ",(0,t.jsx)(n.code,{children:"user:anne"}),"'s ",(0,t.jsx)(n.code,{children:"reader"})," relationship with object ",(0,t.jsx)(n.code,{children:"document:Z"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{\n  user: 'user:anne',\n  relation: 'reader',\n  object: 'document:Z',\n}\n"})}),"\n",(0,t.jsx)(l.Gb,{deleteRelationshipTuples:[{user:"user:anne",relation:"reader",object:"document:Z"}],skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK,l.eU.JAVA_SDK,l.eU.CLI,l.eU.CURL]}),"\n",(0,t.jsx)(n.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,t.jsx)(l.$q,{description:"Check the following sections for more on how to write your authorization data",relatedLinks:[{title:"Managing User Access",description:"Learn about how to give a user access to a particular object.",link:"../interacting/managing-user-access",id:"../interacting/managing-user-access.mdx"},{title:"Managing Group Access",description:"Learn about how to give a group of users access to a particular object.",link:"../interacting/managing-group-access",id:"../interacting/managing-group-access.mdx"},{title:"Transactional Writes",description:"Learn about how to update multiple relations within the same API call.",link:"../interacting/transactional-writes",id:"../interacting/transactional-writes.mdx"}]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);