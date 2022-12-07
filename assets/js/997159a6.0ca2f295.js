"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[5633],{86450:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=i(87462),r=(i(67294),i(3905)),n=i(5270);const s={sidebar_position:12,slug:"/modeling/migrating-schema-1-1"},a="Migrating Models To Schema 1.1",l={unversionedId:"content/modeling/migrating-schema-1-1",id:"content/modeling/migrating-schema-1-1",title:"Migrating Models To Schema 1.1",description:"has introduced a new DSL schema version with several changes that we believe will make models easier to read and write, enable better tuple and model validations, and provide more options for optimizing the performance of different  APIs.",source:"@site/docs/content/modeling/migrating-schema-1-1.mdx",sourceDirName:"content/modeling",slug:"/modeling/migrating-schema-1-1",permalink:"/docs/modeling/migrating-schema-1-1",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/migrating-schema-1-1.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,slug:"/modeling/migrating-schema-1-1"},sidebar:"docs",previous:{title:"Migrating Relations",permalink:"/docs/modeling/migrating-relations"},next:{title:"Interacting with the API",permalink:"/docs/interacting"}},p={},d=[{value:"<ProductName format={ProductNameFormat.ShortForm}/> Model Schema Versions",id:"-model-schema-versions",level:2},{value:"Type Enforcements &amp; Removing <code>as self</code>",id:"type-enforcements--removing-as-self",level:2},{value:"Disallowing String Literals in user_ids",id:"disallowing-string-literals-in-user_ids",level:2},{value:"Enforcing Userset Type Restrictions",id:"enforcing-userset-type-restrictions",level:2},{value:"Public Access",id:"public-access",level:2},{value:"Query Evaluation Behavior with Type Restrictions",id:"query-evaluation-behavior-with-type-restrictions",level:2}],u={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-models-to-schema-11"},"Migrating Models To Schema 1.1"),(0,r.kt)(n.AH,{mdxType:"DocumentationNotice"}),(0,r.kt)(n.rZ,{format:n.v7.ShortForm,mdxType:"ProductName"})," has introduced a new DSL schema version with several changes that we believe will make models easier to read and write, enable better tuple and model validations, and provide more options for optimizing the performance of different ",(0,r.kt)(n.rZ,{format:n.v7.ShortForm,mdxType:"ProductName"})," APIs.",(0,r.kt)("p",null,"In short, we\u2019ll be:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Adding type restrictions."),(0,r.kt)("li",{parentName:"ol"},"Removing the need to specify ",(0,r.kt)("inlineCode",{parentName:"li"},"as self"),", and "),(0,r.kt)("li",{parentName:"ol"},"Requiring you to specify for which relations you can write tuples with public access (using \u2018",(0,r.kt)("inlineCode",{parentName:"li"},"*"),"\u2019).")),(0,r.kt)("h2",{id:"-model-schema-versions"},(0,r.kt)(n.rZ,{format:n.v7.ShortForm,mdxType:"ProductName"})," Model Schema Versions"),(0,r.kt)("p",null,"Since the changes in the DSL are significant we have decided to add a schema version to the DSL. The previous version of the DSL\u2019s schema was ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0"),", and the new schema version will be ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1"),". To use the new syntax please add the following to the top of the model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"model\n  schema 1.1\n")),(0,r.kt)(n.rZ,{format:n.v7.ShortForm,mdxType:"ProductName"})," will eventually stop supporting schema version 1.0. Notifications will be posted in GitHub, Discord and Twitter before this change occurs.",(0,r.kt)("h2",{id:"type-enforcements--removing-as-self"},"Type Enforcements & Removing ",(0,r.kt)("inlineCode",{parentName:"h2"},"as self")),(0,r.kt)("p",null,"We\u2019ll use the following version 1.0 model and tuples to illustrate the changes we\u2019ll need to make:"),(0,r.kt)(n.lG,{configuration:{type_definitions:[{type:"user",relations:{}},{type:"group",relations:{member:{this:{}}}},{type:"folder",relations:{parent:{this:{}},viewer:{union:{child:[{this:{}},{tupleToUserset:{tupleset:{object:"",relation:"parent"},computedUserset:{object:"",relation:"viewer"}}}]}}}},{type:"document",relations:{parent:{this:{}},viewer:{this:{}},can_read:{union:{child:[{computedUserset:{object:"",relation:"viewer"}},{tupleToUserset:{tupleset:{object:"",relation:"parent"},computedUserset:{object:"",relation:"viewer"}}}]}}}}],schema_version:"1.0"},mdxType:"AuthzModelSnippetViewer"}),(0,r.kt)(n.Wz,{relationshipTuples:[{user:"user:bob",relation:"member",object:"group:sales",_description:"Bob is a member of the Sales group"},{user:"folder:sales",relation:"parent",object:"document:pricing",_description:'The "pricing" document is in "sales" folder'},{user:"group:sales#member",relation:"viewer",object:"folder:sales",_description:'Members of the "sales" team can view the "sales" folder'},{user:"user:john",relation:"viewer",object:"document:pricing",_description:'John can view the "pricing" document'}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("p",null,"Those tuples match the intent of how the model was designed, but without type restrictions we can also write tuples that would not. For example, we can say that a document is a member of the sales group:"),(0,r.kt)(n.Wz,{relationshipTuples:[{user:"document:pricing",relation:"member",object:"group:sales",_description:'The "pricing" document is a member of the "sales" group'}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("p",null,"To be able to better validate tuples and make the model more readable, version 1.1 requires you to specify types for all the relations that were previously assignable (e.g. relations defined ",(0,r.kt)("inlineCode",{parentName:"p"},"as self")," in any way), and it removes the ",(0,r.kt)("inlineCode",{parentName:"p"},"as self")," keyword. "),(0,r.kt)("p",null,"The model above needs to be rewritten as:"),(0,r.kt)(n.lG,{configuration:{type_definitions:[{type:"user",relations:{}},{type:"group",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}},{type:"folder",relations:{parent:{this:{}},viewer:{union:{child:[{this:{}},{tupleToUserset:{tupleset:{object:"",relation:"parent"},computedUserset:{object:"",relation:"viewer"}}}]}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"folder"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{parent:{this:{}},viewer:{this:{}},can_read:{union:{child:[{computedUserset:{object:"",relation:"viewer"}},{tupleToUserset:{tupleset:{object:"",relation:"parent"},computedUserset:{object:"",relation:"viewer"}}}]}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"folder"}]},viewer:{directly_related_user_types:[{type:"user"}]},can_read:{directly_related_user_types:[]}}}}],schema_version:"1.1"},mdxType:"AuthzModelSnippetViewer"}),(0,r.kt)("p",null,"After making these changes,  ",(0,r.kt)(n.rZ,{format:n.v7.ShortForm,mdxType:"ProductName"})," will start validating the tuples more strictly, for example, you won\u2019t be able to assign a ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," as a member of a ",(0,r.kt)("inlineCode",{parentName:"p"},"group"),". If your application is writing invalid tuples, you\u2019ll start getting errors when invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Write")," API."),(0,r.kt)("h2",{id:"disallowing-string-literals-in-user_ids"},"Disallowing String Literals in user_ids"),(0,r.kt)("p",null,"With version 1.0 models, you could write a tuple where the user id did not specify a type, for example:"),(0,r.kt)(n.Wz,{relationshipTuples:[{_description:'"bob" is a member of the "sales" group',user:"bob",relation:"member",object:"group:sales"}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("p",null,"However, with version 1.1 you always need to specify an object, so \u201cbob\u2019\u201d is no longer a valid identifier. If you don\u2019t have a type in your model that defines relations for users, you can add a \u2018user\u2019 type with no relations, for example:"),(0,r.kt)(n.lG,{configuration:{type_definitions:[{type:"user",relations:{}}],schema_version:"1.0"},mdxType:"AuthzModelSnippetViewer"}),(0,r.kt)("p",null,"You can then use that type when writing tuples:"),(0,r.kt)(n.Wz,{relationshipTuples:[{user:"user:bob",relation:"member",object:"group:sales",_description:'"bob" is a member of the "sales" group'}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("h2",{id:"enforcing-userset-type-restrictions"},"Enforcing Userset Type Restrictions"),(0,r.kt)("p",null,"With the model above, the following tuples will be valid according to the type definitions:"),(0,r.kt)(n.Wz,{relationshipTuples:[{user:"user:bob",relation:"member",object:"group:sales"},{user:"folder:sales",relation:"parent",object:"document:pricing"},{user:"user:john",relation:"viewer",object:"document:pricing"}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("p",null,"However, the one below will not be valid, as we can\u2019t assign ",(0,r.kt)("inlineCode",{parentName:"p"},"group:sales#member")," to the viewer relationship of a folder. "),(0,r.kt)(n.Wz,{relationshipTuples:[{user:"group:sales#member",relation:"viewer",object:"folder:sales"}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("p",null,"You might think that given ",(0,r.kt)("inlineCode",{parentName:"p"},"group:sales#member")," are actually users, you should still be able to assign it. ",(0,r.kt)(n.rZ,{format:n.v7.ShortForm,mdxType:"ProductName"})," calls expressions like ",(0,r.kt)("inlineCode",{parentName:"p"},"group:sales#member"),' "usersets", and with our model we can only assign users.'),(0,r.kt)("p",null,"The issue is that there are a lot of other usersets that you don't want to be assigned as viewers of a folder. For example, you would not want to add ",(0,r.kt)("inlineCode",{parentName:"p"},"document:pricing#viewer")," as viewers of the folder as conceptually it does not make sense to say \u201cevery viewer of this document should be a viewer of this folder\u201d."),(0,r.kt)("p",null,"To allow these tuples to be written, you need to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"group#member")," as a valid type for the folder\u2019s viewer relationship. You would want to do the same with the document\u2019s viewer relationship if you want to define that the members of a group can be viewers of a document:"),(0,r.kt)(n.lG,{configuration:{type_definitions:[{type:"user",relations:{}},{type:"group",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}},{type:"folder",relations:{parent:{this:{}},viewer:{union:{child:[{this:{}},{tupleToUserset:{tupleset:{object:"",relation:"parent"},computedUserset:{object:"",relation:"viewer"}}}]}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"folder"}]},viewer:{directly_related_user_types:[{type:"user"},{type:"group",relation:"member"}]}}}},{type:"document",relations:{parent:{this:{}},viewer:{this:{}},can_read:{union:{child:[{computedUserset:{object:"",relation:"viewer"}},{tupleToUserset:{tupleset:{object:"",relation:"parent"},computedUserset:{object:"",relation:"viewer"}}}]}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"folder"}]},viewer:{directly_related_user_types:[{type:"user"},{type:"group",relation:"member"}]},can_read:{directly_related_user_types:[]}}}}],schema_version:"1.1"},mdxType:"AuthzModelSnippetViewer"}),(0,r.kt)("p",null,"You can identify which usersets you need to add by looking at tuples in your store that have the following structure:"),(0,r.kt)(n.Wz,{relationshipTuples:[{user:"group:sales#member",relation:"viewer",object:"folder:sales",_description:'Members of the "sales" group are viewers of the "sales" folder'}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("p",null,"If you find a tuple like that, you\u2019ll need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"group#member")," in the list of types allowed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"viewer")," relation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"folder")," type."),(0,r.kt)("h2",{id:"public-access"},"Public Access"),(0,r.kt)("p",null,"When using version 1.0, you can indicate public access to specific objects by specifying a wildcard user in a relationship to any object, e.g.:"),(0,r.kt)(n.Wz,{relationshipTuples:[{user:"*",relation:"viewer",object:"document:pricing",_description:'All users are viewers of the "pricing" document'}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("p",null,'When you write the tuple above, all users are granted with the \u201cviewer\u201d relationship for the \u201cpricing" document. You can write those kinds of tuples for any relation that is ',(0,r.kt)(n.uH,{section:"what-are-direct-and-implied-relationships",linkName:"directly assignable",mdxType:"ProductConcept"}),"  in the model. "),(0,r.kt)("p",null,"In version 1.1 we want to be more explicit about the tuples you can write, so you\u2019ll need to declare in the DSL which relations allow wildcards and for which object types. If we want to let any object of type \u201cuser\u201d to be a viewer of a specific document we\u2019ll need to explicitly define it"),(0,r.kt)(n.lG,{configuration:{type_definitions:[{type:"user",relations:{}},{type:"document",relations:{viewer:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"},{type:"user",wildcard:{}}]}}}}],schema_version:"1.1"},mdxType:"AuthzModelSnippetViewer"}),(0,r.kt)("p",null,"You\u2019ll need to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"user:*")," as the user value in the tuple to enable this:"),(0,r.kt)(n.Wz,{relationshipTuples:[{user:"user:*",relation:"viewer",object:"document:pricing",_description:'All objects of type "user" are viewers of the "pricing" document'}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("p",null,"Being explicit about the wildcard type restrictions also lets you model scenarios like \u201call employees can see this document, but not all external users\u201d, \u201call user accounts can access this document, but not service/machine-to-machine accounts\u201d."),(0,r.kt)("p",null,"This change implies that you\u2019ll need to change your code to write tuples with this new syntax, and that you\u2019ll need to migrate existing tuples to use the new format. "),(0,r.kt)("p",null,"You might have 3 kinds of tuples in your model that use \u201c*\u201d, with different migration strategies:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tuples that have user = \u201c*\u201d")),(0,r.kt)("p",null,"You would need to retrieve those tuples and write them using the proper type (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"user:*"),"). To retrieve them, you\u2019ll need to use the Read endpoint, filter on your side the tuples that have ",(0,r.kt)("inlineCode",{parentName:"p"},"user = \u201c*\u201d"),", and call the Write API for each one, with the proper type, e.g:"),(0,r.kt)(n.Wz,{relationshipTuples:[{user:"user:*",relation:"viewer",object:"document:pricing",_description:'All objects of type "user" are viewers of the "pricing" document'}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Tuples that have ",(0,r.kt)("inlineCode",{parentName:"li"},'user = "employee:*\u201d'),",  where ",(0,r.kt)("inlineCode",{parentName:"li"},"employee")," is NOT a type that is defined in the new iteration of your model.")),(0,r.kt)("p",null,"If you have tuples with this format, they will be considered invalid because they don\u2019t have a corresponding type in the model. If you need such a type defined, you\u2019ll need to add it to the model, and the scenario will be similar to the one described below."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Tuples that have ",(0,r.kt)("inlineCode",{parentName:"li"},"user = \u201cuser:*\u201d"),", which would mean \"the user with user_id = '*'\u201d, where ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," is type that is defined in the new iteration of your model.")),(0,r.kt)("p",null,'In this case, the meaning of the tuple will change. If you were intending to specify "a user with user id = ',"*",'", you will need to encode it in a different way instead of using \u201c*\u201d.  If you intended to specify \u201cevery user has this relationship with this object\u201d then it\u2019s not the way it would have worked with schema version = 1.0, but it will work with version = 1.1.'),(0,r.kt)("h2",{id:"query-evaluation-behavior-with-type-restrictions"},"Query Evaluation Behavior with Type Restrictions"),(0,r.kt)("p",null,"When you make changes to a model that already has tuples, those tuples might become invalid. Some cases where this can happen are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you rename/delete a type."),(0,r.kt)("li",{parentName:"ul"},"If you rename/delete a relation."),(0,r.kt)("li",{parentName:"ul"},"If you remove types from the list of allowed types in a relation, including changes for Public Access."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)(n.rZ,{format:n.v7.ShortForm,mdxType:"ProductName"})," introduces a change that makes a tuple invalid.")),(0,r.kt)("p",null,"In these cases, ",(0,r.kt)(n.rZ,{format:n.v7.ShortForm,mdxType:"ProductName"}),"  will not consider those invalid tuples when evaluating queries (check, expand, list-objects, etc). However, after any of the changes above happens, you should delete those tuples as having a large number of invalid tuples will negatively affect performance."))}c.isMDXComponent=!0}}]);