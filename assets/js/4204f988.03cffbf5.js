"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1794],{60855:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=i(87462),a=(i(67294),i(3905)),o=i(30601),l=i(65488),r=i(85162);const s={sidebar_position:8,description:"Modeling Concepts: Direct Relationships",slug:"/modeling/building-blocks/direct-relationships"},p="Direct Relationships",d={unversionedId:"content/modeling/building-blocks/direct-relationships",id:"content/modeling/building-blocks/direct-relationships",title:"Direct Relationships",description:"Modeling Concepts: Direct Relationships",source:"@site/docs/content/modeling/building-blocks/direct-relationships.mdx",sourceDirName:"content/modeling/building-blocks",slug:"/modeling/building-blocks/direct-relationships",permalink:"/docs/modeling/building-blocks/direct-relationships",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/building-blocks/direct-relationships.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Modeling Concepts: Direct Relationships",slug:"/modeling/building-blocks/direct-relationships"},sidebar:"docs",previous:{title:"Building Blocks",permalink:"/docs/modeling/building-blocks"},next:{title:"Concentric Relationships",permalink:"/docs/modeling/building-blocks/concentric-relationships"}},u={},m=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"What Are Direct Relationships?",id:"what-are-direct-relationships",level:2},{value:"Enable Or Disable Direct Relationships",id:"enable-or-disable-direct-relationships",level:2},{value:"How It Affects Your System",id:"how-it-affects-your-system",level:2},{value:"1. With Direct Relationships Enabled",id:"1-with-direct-relationships-enabled",level:3},{value:"2. With Direct Relationships Disabled",id:"2-with-direct-relationships-disabled",level:3},{value:"Related Sections",id:"related-sections",level:2}],c={toc:m};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"direct-relationships"},"Direct Relationships"),(0,a.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,a.kt)("p",null,"In this guide you'll learn how to model relationships that may or may not be assigned directly to individual users."),(0,a.kt)(o.S1,{title:"When to use",appearance:"filled",description:(0,a.kt)("div",null,(0,a.kt)("p",null,"Disabling ",(0,a.kt)("em",{parentName:"p"},"direct relationships")," for a certain relation on an objects are useful especially in cases where you are trying to model some permissions that are not usually granted individually to a user."),(0,a.kt)("p",null,"This is useful when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For security reason, not permitting permissions assigned directly to individuals without associating roles"))),mdxType:"CardBox"}),(0,a.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,a.kt)("p",null,"To better understand this guide, you should be familiar with some ",(0,a.kt)(o.uH,{mdxType:"ProductConcept"})," and know how to develop the things listed below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("p",null,"You will need to know the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Direct Access"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Concepts"))),(0,a.kt)("h3",{id:"direct-access"},"Direct Access"),(0,a.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,a.kt)("a",{parentName:"p",href:"/docs/modeling/direct-access"},"Learn more \u2192")),(0,a.kt)("h3",{id:"-concepts"},(0,a.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(o.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(o.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(o.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)(o.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,a.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configuration-language#the-direct-relationship-keyword"},"Direct Relationship Keyword"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"self")," used in the context of the relation definition can be used to allow direct relationships to the objects of this type"))),(0,a.kt)(o.XQ,{mdxType:"Playground"}),(0,a.kt)("h2",{id:"what-are-direct-relationships"},"What Are Direct Relationships?"),(0,a.kt)("p",null,"Direct relationships are relationships where a user has a relationship to an ",(0,a.kt)(o.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"})," that is not dependent on any other relationship they have with that object."),(0,a.kt)("p",null,"When checking for a relationship, a direct relationship exists if a ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple",mdxType:"ProductConcept"}))," is present in the system with the exact same object and relation that were in the query and where the user is one of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the same user ID as that in the query"),(0,a.kt)("li",{parentName:"ul"},"everyone (",(0,a.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,a.kt)("li",{parentName:"ul"},"a set of users that contains the user ID present in the query")),(0,a.kt)("h2",{id:"enable-or-disable-direct-relationships"},"Enable Or Disable Direct Relationships"),(0,a.kt)("p",null,"Direct relationships can be enabled for a specific relation on an ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(o.uH,{section:"what-is-a-type",linkName:"object type",mdxType:"ProductConcept"}))," by adding the ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration-language#the-direct-relationship-keyword"},"direct relationship keyword")," from that ",(0,a.kt)(o.uH,{section:"what-is-a-relation-definition",linkName:"relation's definition",mdxType:"ProductConcept"}),". Likewise, they can be disabled by removing that keyword."),(0,a.kt)(o.lG,{configuration:{type_definitions:[{type:"document",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}}},{type:"team",relations:{member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)(o.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"})," describes two ",(0,a.kt)(o.uH,{section:"what-is-a-type",linkName:"object types",mdxType:"ProductConcept"}),": ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"team"),"."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," ",(0,a.kt)(o.uH,{section:"what-is-a-type-definition",linkName:"type definition",mdxType:"ProductConcept"})," has two ",(0,a.kt)(o.uH,{section:"what-is-a-relation",linkName:"relations",mdxType:"ProductConcept"}),", ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer"),". Both relations allow a direct relationship; ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," also allows an ",(0,a.kt)(o.uH,{section:"what-are-direct-and-implied-relationships",linkName:"indirect relationship",mdxType:"ProductConcept"})," through ",(0,a.kt)("inlineCode",{parentName:"p"},"editor"),"."),(0,a.kt)("p",{parentName:"admonition"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"team")," type definition, there is a single ",(0,a.kt)("inlineCode",{parentName:"p"},"member")," relation that only allows direct relationships.")),(0,a.kt)("h2",{id:"how-it-affects-your-system"},"How It Affects Your System"),(0,a.kt)("p",null,"To illustrate the effect enabling or disabling direct relationships on a specific relation has, we'll investigate several situations."),(0,a.kt)("h3",{id:"1-with-direct-relationships-enabled"},"1. With Direct Relationships Enabled"),(0,a.kt)("p",null,"Let us start with the authorization model we had above:"),(0,a.kt)(o.lG,{configuration:{type_definitions:[{type:"document",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}}},{type:"team",relations:{member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("p",null,"Now choose the type of relation to see how it affects your system:"),(0,a.kt)(l.Z,{groupId:"relationship-type",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"direct",label:"Direct User",mdxType:"TabItem"},(0,a.kt)("p",null,"Assume you have a tuple that states that Anne is a ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"document:planning")),(0,a.kt)(o.Wz,{relationshipTuples:[{user:"anne",relation:"viewer",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("p",null,"Now if we do a ",(0,a.kt)(o.uH,{section:"what-is-a-check-request",linkName:"check request",mdxType:"ProductConcept"})," to see if Anne can view the planning document, we will get a response of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed": true}'),"."),(0,a.kt)(o.uT,{user:"anne",relation:"viewer",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"This is because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is a relationship tuple specifying that Anne has a ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relationship with ",(0,a.kt)("inlineCode",{parentName:"li"},"document:planning"),"."),(0,a.kt)("li",{parentName:"ul"},"Direct relationships are allowed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relation definition in the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," type definition."))),(0,a.kt)(r.Z,{value:"everyone",label:"Everyone",mdxType:"TabItem"},(0,a.kt)("p",null,"Assume you have a tuple that states that ",(0,a.kt)(o.uH,{section:"how-do-i-represent-everyone",linkName:"everyone",mdxType:"ProductConcept"})," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"document:planning")," (In other words, the document is public)"),(0,a.kt)(o.Wz,{relationshipTuples:[{user:"*",relation:"viewer",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("p",null,"Now if we do a check request to see if Beth can view the planning document, we will get a response of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed": true}'),"."),(0,a.kt)(o.uT,{user:"beth",relation:"viewer",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"This is because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is a relationship tuple specifying that everyone has a ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relationship with ",(0,a.kt)("inlineCode",{parentName:"li"},"document:planning"),"."),(0,a.kt)("li",{parentName:"ul"},"Direct relationships are allowed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relation definition in the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," type definition.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note: Even though the relationship tuple stored in the system does not specify the user (",(0,a.kt)("inlineCode",{parentName:"p"},"beth"),"), this is still considered a direct relationship."))),(0,a.kt)(r.Z,{value:"userset",label:"Userset",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/modeling/building-blocks/usersets"},(0,a.kt)("em",{parentName:"a"},"Usersets"))," are the third way direct relationships apply, we will see how in this section."),(0,a.kt)("p",null,"Assume you have two relationship tuples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Charlie is a member of the product team."),(0,a.kt)("li",{parentName:"ul"},"Members of the product team are viewers of the planning document.")),(0,a.kt)(o.Wz,{relationshipTuples:[{user:"charlie",relation:"member",object:"team:product"},{user:"team:product#member",relation:"viewer",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that these two relationship tuples are specifying that:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"charlie")," is a ",(0,a.kt)("inlineCode",{parentName:"li"},"member")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"team:product"),"."),(0,a.kt)("li",{parentName:"ul"},"any ",(0,a.kt)("inlineCode",{parentName:"li"},"member")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"team:product")," is a ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"document:planning"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note that this second relationship tuple is specifying that the ",(0,a.kt)("strong",{parentName:"li"},"members")," of the team have viewer access, and not the team object itself."))))),(0,a.kt)("p",null,"Now if we do a ",(0,a.kt)("em",{parentName:"p"},"check request")," to see if charlie can view the planning document, we will get a response of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed": true}'),"."),(0,a.kt)(o.uT,{user:"charlie",relation:"viewer",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"This is because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Charlie is a member of the product team."),(0,a.kt)("li",{parentName:"ul"},"There is a relationship tuple specifying that all members of the product team have a ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relationship with ",(0,a.kt)("inlineCode",{parentName:"li"},"document:planning"),"."),(0,a.kt)("li",{parentName:"ul"},"Direct relationships are allowed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relation definition in the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," type definition.")),(0,a.kt)("p",null,"Note that this is still considered a direct relationship no matter how many resolutions occur on the usersets until the user is found."),(0,a.kt)("p",null,"For example, if our relationship tuples were the following relationship tuples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dany is a member of the product leads team."),(0,a.kt)("li",{parentName:"ul"},"Members of the product leads team are members of the product team."),(0,a.kt)("li",{parentName:"ul"},"Members of the product team are members of the contoso team."),(0,a.kt)("li",{parentName:"ul"},"Members of the contoso team are viewers of the planning document.")),(0,a.kt)(o.Wz,{relationshipTuples:[{user:"dany",relation:"member",object:"team:product-leads"},{user:"team:product-leads#member",relation:"member",object:"team:product"},{user:"team:product#member",relation:"member",object:"team:contoso"},{user:"team:contoso#member",relation:"viewer",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("p",null,"A subsequent ",(0,a.kt)("em",{parentName:"p"},"check request")," to see if Dany can view the planning document will still return a response of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed": true}'),"."),(0,a.kt)(o.uT,{user:"dany",relation:"viewer",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note: Even though the relationship tuple stored in the system does not specify the user (",(0,a.kt)("inlineCode",{parentName:"p"},"charlie")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"dany"),"), this is still considered a direct relationship."))),(0,a.kt)(r.Z,{value:"indirect",label:"Indirect Relationship",mdxType:"TabItem"},(0,a.kt)("p",null,"Here we will cover one example of an ",(0,a.kt)(o.uH,{section:"what-are-direct-and-implied-relationships",linkName:"indirect relationship",mdxType:"ProductConcept"})," in order to see how they differ from direct relationships."),(0,a.kt)("p",null,"With the same authorization model we have above, assume there is a relationship tuple that specifies that Emily is an ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"document:planning"),"."),(0,a.kt)(o.Wz,{relationshipTuples:[{user:"emily",relation:"editor",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("p",null,"A subsequent ",(0,a.kt)("em",{parentName:"p"},"check request")," to see if emily can view the planning document will still return a response of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed": true}'),"."),(0,a.kt)(o.uT,{user:"emily",relation:"viewer",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"This is because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emily is an ",(0,a.kt)("inlineCode",{parentName:"li"},"editor")," of the planning document."),(0,a.kt)("li",{parentName:"ul"},"The authorization model specified that anyone who is an ",(0,a.kt)("inlineCode",{parentName:"li"},"editor")," on a ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," is also a ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," on that document.")),(0,a.kt)("p",null,"In this case, there is ",(0,a.kt)("strong",{parentName:"p"},"NO")," direct viewer relationship between Emily and the planning document. The only viewer relationship that exists is implied because Emily is an editor and the authorization model specified that any document's ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," is that document's viewer."))),(0,a.kt)("h3",{id:"2-with-direct-relationships-disabled"},"2. With Direct Relationships Disabled"),(0,a.kt)("p",null,"In this section, we will investigate the effect of disabling ",(0,a.kt)("em",{parentName:"p"},"direct relationships")," on the document's ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," relation."),(0,a.kt)(o.lG,{configuration:{type_definitions:[{type:"document",relations:{viewer:{computedUserset:{relation:"editor"}},editor:{this:{}}}},{type:"team",relations:{member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Notice that in this updated authorization model, the direct relationship keyword has been removed from the document's ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," relation definition.")),(0,a.kt)("p",null,"Now choose the type of relation to see how it affects your system:"),(0,a.kt)(l.Z,{groupId:"relationship-type",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"direct",label:"Direct User",mdxType:"TabItem"},(0,a.kt)("p",null,"Assume you have a tuple that states that Fred is a ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"document:planning")),(0,a.kt)(o.Wz,{relationshipTuples:[{user:"fred",relation:"viewer",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("p",null,"Now if we do a check request to see if Fred can view the planning document, we will get a response of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed": false}'),"."),(0,a.kt)(o.uT,{user:"fred",relation:"viewer",object:"document:planning",allowed:!1,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"This is because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Even though there is a relationship tuple specifying that Fred has a ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relationship with ",(0,a.kt)("inlineCode",{parentName:"li"},"document:planning"),"."),(0,a.kt)("li",{parentName:"ul"},"Direct relationships are ",(0,a.kt)("strong",{parentName:"li"},"NOT")," allowed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relation definition in the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," type definition."))),(0,a.kt)(r.Z,{value:"everyone",label:"Everyone",mdxType:"TabItem"},(0,a.kt)("p",null,"You will see the same behaviour with a relationship tuple specifying everyone as the user."),(0,a.kt)("p",null,"Assume you have a tuple that states that everyone is a ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"document:planning"),"."),(0,a.kt)(o.Wz,{relationshipTuples:[{user:"*",relation:"viewer",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("p",null,"Now if we do a check request to see if Gabriel can view the planning document, we will get a response of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed": false}'),"."),(0,a.kt)(o.uT,{user:"gabriel",relation:"viewer",object:"document:planning",allowed:!1,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"This is because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Even though there is a relationship tuple specifying that everyone has a ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relationship with ",(0,a.kt)("inlineCode",{parentName:"li"},"document:planning"),"."),(0,a.kt)("li",{parentName:"ul"},"Direct relationships are ",(0,a.kt)("strong",{parentName:"li"},"NOT")," allowed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relation definition in the ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," type definition."))),(0,a.kt)(r.Z,{value:"userset",label:"Userset",mdxType:"TabItem"},(0,a.kt)("p",null,"The same logic applies to usersets."),(0,a.kt)("p",null,"Assume you have two relationship tuples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Henry is a member of the product team."),(0,a.kt)("li",{parentName:"ul"},"Members of the product team are viewers of the planning document.")),(0,a.kt)(o.Wz,{relationshipTuples:[{user:"henry",relation:"member",object:"team:product"},{user:"team:product#member",relation:"viewer",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("p",null,"Now if we do a check request to see if Henry can view the planning document, we will get a response of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed": false}'),"."),(0,a.kt)(o.uT,{user:"henry",relation:"viewer",object:"document:planning",allowed:!1,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"This is because although:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Henry is a member of the product team."),(0,a.kt)("li",{parentName:"ul"},"There is a relationship tuple specifying that all members of the product team have a ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," relationship with ",(0,a.kt)("inlineCode",{parentName:"li"},"document:planning"),".")),(0,a.kt)("p",null,"Direct relationships are ",(0,a.kt)("strong",{parentName:"p"},"NOT")," allowed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer")," relation definition in the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," type definition.")),(0,a.kt)(r.Z,{value:"indirect",label:"Indirect Relationship",mdxType:"TabItem"},(0,a.kt)("p",null,"Indirect relationships are not affected by disabling a direct relationship on a certain relation."),(0,a.kt)("p",null,"Assume there is a relationship tuple that specifies that Ingred is an ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"document:planning"),"."),(0,a.kt)(o.Wz,{relationshipTuples:[{user:"ingred",relation:"editor",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("p",null,"A subsequent check request to see if Ingred can view the planning document will still return a response of ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed": true}'),"."),(0,a.kt)(o.uT,{user:"ingred",relation:"viewer",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}))),(0,a.kt)("h2",{id:"related-sections"},"Related Sections"),(0,a.kt)(o.$q,{description:"Check the following sections for more one how direct relationships can be used. Also, take a look at the access relation in the feature type in Modeling Entitlements for another use-case.",relatedLinks:[{title:"Modeling Roles and Permissions",description:"Learn how to remove the direct relationship to indicate nonassignable permissions.",link:"../roles-and-permissions",id:"../roles-and-permissions.mdx"},{title:"Modeling for IoT",description:"See how Roles and Permissions can be used in an IoT use-case.",link:"../advanced/iot",id:"../advanced/iot.mdx"},{title:"Modeling Entitlements",description:"Take a look at the access relation in the feature type for an example of removing the direct relationship",link:"../advanced/entitlements",id:"../advanced/entitlements.mdx"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);