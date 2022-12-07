"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7464],{42401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(5270);const i={sidebar_position:9,slug:"/modeling/organization-context-authorization"},l="Authorization Through Organization Context",s={unversionedId:"content/modeling/organization-context-authorization",id:"content/modeling/organization-context-authorization",title:"Authorization Through Organization Context",description:"This section tackles cases where a user may have access to a particular resource through their presence in a particular organization, and they should have that access only when logged in within the context of that organization.",source:"@site/docs/content/modeling/organization-context-authorization.mdx",sourceDirName:"content/modeling",slug:"/modeling/organization-context-authorization",permalink:"/docs/modeling/organization-context-authorization",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/organization-context-authorization.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,slug:"/modeling/organization-context-authorization"},sidebar:"docs",previous:{title:"Contextual and Time-Based Authorization",permalink:"/docs/modeling/contextual-time-based-authorization"},next:{title:"Building Blocks",permalink:"/docs/modeling/building-blocks"}},u={},c=[{value:"Before You Start",id:"before-you-start",level:2},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Scenario",id:"scenario",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"Understand Relationships Without Contextual Data",id:"understand-relationships-without-contextual-data",level:3},{value:"Take Organization Context Into Consideration",id:"take-organization-context-into-consideration",level:3},{value:"Extend The Authorization Model",id:"extend-the-authorization-model",level:5},{value:"Add The Required Tuples To Mark That Anne Is In An Approved Context",id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context",level:5},{value:"Use Contextual Tuples For Context Related Checks",id:"use-contextual-tuples-for-context-related-checks",level:3},{value:"Summary",id:"summary",level:2},{value:"Related Sections",id:"related-sections",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorization-through-organization-context"},"Authorization Through Organization Context"),(0,o.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"This section tackles cases where a user may have access to a particular resource through their presence in a particular organization, and they should have that access only when logged in within the context of that organization."),(0,o.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,o.kt)("div",null,"Contextual Tuples should be used when modeling cases where a user's access to an object depends on the context of their request. For example:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An employee\u2019s ability to access a document when they are connected to the organization VPN or the api call is originating from an internal IP address."),(0,o.kt)("li",{parentName:"ul"},"A support engineer is only able to access a user's account during office hours."),(0,o.kt)("li",{parentName:"ul"},"If a user belongs to multiple organizations, they are only able to access a resource if they set a specific organization in their current context."))),mdxType:"CardBox"}),(0,o.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"To follow this guide, you should be familiar with some ",(0,o.kt)(r.uH,{mdxType:"ProductConcept"}),"."),(0,o.kt)("h3",{id:"-concepts"},(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-check-request",linkName:"Check Request",mdxType:"ProductConcept"}),": is a call to the ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," check endpoint that returns whether the user has a certain relationship with an object."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-are-contextual-tuples",linkName:"Contextual Tuple",mdxType:"ProductConcept"}),": a tuple that can be added to a check request, and only exist within the context of that particular request.")),(0,o.kt)("p",null,"You also need to be familiar with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modeling Object-to-Object Relationships"),": You need to know how to create relationships between objects and how that might affect a user's relationships to those objects. ",(0,o.kt)("a",{parentName:"li",href:"/docs/modeling/building-blocks/object-to-object-relationships"},"Learn more \u2192")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modeling Multiple Restrictions"),": You need to know how to model requiring multiple authorizations before allowing users to perform certain actions. ",(0,o.kt)("a",{parentName:"li",href:"/docs/modeling/multiple-restrictions"},"Learn more \u2192"))),(0,o.kt)(r.XQ,{mdxType:"Playground"}),(0,o.kt)("h3",{id:"scenario"},"Scenario"),(0,o.kt)("p",null,"For the scope of this guide, we are going to consider the following scenario."),(0,o.kt)("p",null,"Consider you are building the authorization model for a multi-tenant project management system."),(0,o.kt)("p",null,"In this particular system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"projects are owned and managed by companies"),(0,o.kt)("li",{parentName:"ul"},"users can be members of multiple companies"),(0,o.kt)("li",{parentName:"ul"},"project access is governed by the user's role in the organization that manages the project")),(0,o.kt)("p",null,"In order for a user to access a project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The project needs to be managed by an organization the user is a member of"),(0,o.kt)("li",{parentName:"ul"},"A project is owned by a single organization"),(0,o.kt)("li",{parentName:"ul"},"A project can be shared with partner companies (that are able to view, edit but not perform admin actions, such as deletion, on the project)"),(0,o.kt)("li",{parentName:"ul"},"The user should have a role that grants access to the project"),(0,o.kt)("li",{parentName:"ul"},"The user should be logged in within the context of that organization")),(0,o.kt)("p",null,"We will start with the following authorization model:"),(0,o.kt)(r.lG,{configuration:{type_definitions:[{type:"user"},{type:"organization",relations:{member:{this:{}},project_manager:{this:{}},project_editor:{this:{}}}},{type:"project",relations:{owner:{this:{}},partner:{this:{}},manager:{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_manager"}}},editor:{union:{child:[{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_editor"}}},{tupleToUserset:{tupleset:{object:"",relation:"partner"},computedUserset:{object:"",relation:"project_editor"}}},{computedUserset:{object:"",relation:"manager"}}]}},can_delete:{computedUserset:{object:"",relation:"manager"}},can_edit:{computedUserset:{object:"",relation:"editor"}},can_view:{computedUserset:{object:"",relation:"editor"}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"We are considering the case that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Anne has a project manager role at organizations A, B and C"),(0,o.kt)("li",{parentName:"ul"},"Beth has a project manager role at organization B"),(0,o.kt)("li",{parentName:"ul"},"Carl has a project manager role at organization C"),(0,o.kt)("li",{parentName:"ul"},"Project X is owned by organization A"),(0,o.kt)("li",{parentName:"ul"},"Project X is shared with organization B"))),(0,o.kt)("p",null,"The above state translates to the following relationship tuples:"),(0,o.kt)(r.Gb,{relationshipTuples:[{_description:"Anne has a `project manager` role at organization A",user:"user:anne",relation:"project_manager",object:"organization:A"},{_description:"Anne has a `project manager` role at organization B",user:"user:anne",relation:"project_manager",object:"organization:B"},{_description:"Anne has a `project manager` role at organization C",user:"user:anne",relation:"project_manager",object:"organization:C"},{_description:"Beth has a `project manager` role at organization B",user:"user:anne",relation:"project_manager",object:"organization:B"},{_description:"Carl has a `project manager` role at organization C",user:"user:carl",relation:"project_manager",object:"organization:C"},{_description:"Organization A owns Project X",user:"organization:A",relation:"owner",object:"project:X"},{_description:"Project X is shared with Organization B",user:"organization:B",relation:"partner",object:"project:X"}],skipSetup:!0,mdxType:"WriteRequestViewer"})),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When logging in within the context of organization A, Anne should be able to view and delete project X."),(0,o.kt)("li",{parentName:"ul"},"When logging in within the context of organization B, Anne should be able to view, but not delete, project X."),(0,o.kt)("li",{parentName:"ul"},"When logging in within the context of organization C, Anne should not be able to view nor delete project X."),(0,o.kt)("li",{parentName:"ul"},"When logging in within the context of organization B, Beth should be able to view, but not delete, project X."),(0,o.kt)("li",{parentName:"ul"},"Carl should not be able to view nor delete project X.")),(0,o.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,o.kt)("p",null,"In order to solve for the requirements above, we will break the problem down into three steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#understand-relationships-without-contextual-data"},"Understand relationships without contextual tuples"),'. For example, we need to ensure that Anne can view and delete "Project X".'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#take-organization-context-into-consideration"},"Take organization context into consideration"),". This includes ",(0,o.kt)("a",{parentName:"li",href:"#extend-the-authorization-model"},"extending the authorization model")," and a temporary step of ",(0,o.kt)("a",{parentName:"li",href:"#add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context"},"adding the required tuples to mark that Anne is in an approved context"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#use-contextual-tuples-for-context-related-checks"},"Use contextual tuples for context related checks"),".")),(0,o.kt)("h3",{id:"understand-relationships-without-contextual-data"},"Understand Relationships Without Contextual Data"),(0,o.kt)("p",null,"With the authorization model and relationship tuples shown above, ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),' has all the information needed to ensure that Anne can view and delete "Project X".'),(0,o.kt)("p",null,"We can verify that using the following checks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Anne can view Project X",(0,o.kt)(r.uT,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0,mdxType:"CheckRequestViewer"})),(0,o.kt)("li",{parentName:"ul"},"Anne can delete Project X",(0,o.kt)(r.uT,{user:"user:anne",relation:"can_delete",object:"project:X",allowed:!0,skipSetup:!0,mdxType:"CheckRequestViewer"}))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"More checks"),"* Beth can view Project X",(0,o.kt)(r.uT,{user:"user:beth",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0,mdxType:"CheckRequestViewer"}),"* Beth cannot delete Project X",(0,o.kt)(r.uT,{user:"user:beth",relation:"can_delete",object:"project:X",allowed:!1,skipSetup:!0,mdxType:"CheckRequestViewer"}),"* Carl cannot view Project X",(0,o.kt)(r.uT,{user:"user:carl",relation:"can_view",object:"project:X",allowed:!1,skipSetup:!0,mdxType:"CheckRequestViewer"}),"* Carl cannot delete Project X",(0,o.kt)(r.uT,{user:"user:carl",relation:"can_delete",object:"project:X",allowed:!1,skipSetup:!0,mdxType:"CheckRequestViewer"})),(0,o.kt)("p",null,'Note that so far, we have not prevented Anne from viewing "Project X" even if Anne is viewing it from the context of Organization C.'),(0,o.kt)("h3",{id:"take-organization-context-into-consideration"},"Take Organization Context Into Consideration"),(0,o.kt)("h5",{id:"extend-the-authorization-model"},"Extend The Authorization Model"),(0,o.kt)("p",null,"In order to add a restriction based on the current organization context, we will make use of ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," configuration language's support for ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration-language#the-intersection-operator"},"intersection")," to specify that a user has to both have access ",(0,o.kt)("em",{parentName:"p"},"and")," be in the correct context in order to be authorized."),(0,o.kt)("p",null,"We can do that by introducing some new relations and updating existing relation definitions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'On the "organization" type')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Add "user_in_context" relation to mark that a user\'s access is being evaluated within that particular context'),(0,o.kt)("li",{parentName:"ul"},'Update the "project_manager" relation to require that the user be in the correct context (by adding ',(0,o.kt)("inlineCode",{parentName:"li"},"and user_in_context")," to the relation definition)"),(0,o.kt)("li",{parentName:"ul"},"Considering that ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),' does not yet support multiple logical operations within the same definition, we will split "project_editor" into two:',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'"base_project_editor" editor which will contain the original relation definition (',(0,o.kt)("inlineCode",{parentName:"li"},"self or project_manager"),")"),(0,o.kt)("li",{parentName:"ul"},'"project_editor" which will require that a user has both the "base_project_editor" and the "user_in_context" relations')))),(0,o.kt)("p",null,'The "organization" type definition then becomes:'),(0,o.kt)(r.lG,{configuration:{type:"organization",relations:{member:{this:{}},project_manager:{intersection:{child:[{this:{}},{computedUserset:{object:"",relation:"user_in_context"}}]}},base_project_editor:{union:{child:[{this:{}},{computedUserset:{object:"",relation:"project_manager"}}]}},project_editor:{intersection:{child:[{computedUserset:{object:"",relation:"base_project_editor"}},{computedUserset:{object:"",relation:"user_in_context"}}]}},user_in_context:{this:{}}}},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'On the "project" type')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Nothing will need to be done, as it will inherit the updated "project_manager" and "project_editor" relation definitions from "organization"')),(0,o.kt)("h5",{id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context"},"Add The Required Tuples To Mark That Anne Is In An Approved Context"),(0,o.kt)("p",null,"Now that we have updated our authorization model to take the current user's organization context into consideration, you will notice that Anne has lost access because nothing indicates that Anne is authorizing from the context of an organization. You can verify that by issuing the following check:"),(0,o.kt)(r.uT,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!1,skipSetup:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("p",null,"In order for Anne to be authorized, a tuple indicating Anne's current organization context will need to be present:"),(0,o.kt)(r.Gb,{relationshipTuples:[{_description:"Anne is authorizing from the context of organization:A",user:"user:anne",relation:"user_in_context",object:"organization:A"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("p",null,"We can verify this by running a check request"),(0,o.kt)(r.uT,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("h3",{id:"use-contextual-tuples-for-context-related-checks"},"Use Contextual Tuples For Context Related Checks"),(0,o.kt)("p",null,"Now that we know we can authorize based on present state, we have a different problem to solve. We are storing the tuples in the state in order for ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," to evaluate them, which fails in certain use-cases where Anne can be connected to two different contexts in different browser windows at the same time, as each has a different context at the same time, so if they are written to the state, which will ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," use to compute Anne's access to the project?"),(0,o.kt)("p",null,"For Check calls, ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),' has a concept called "',(0,o.kt)(r.uH,{section:"what-are-contextual-tuples",linkName:"Contextual Tuples",mdxType:"ProductConcept"}),'". Contextual Tuples are tuples that do ',(0,o.kt)("strong",{parentName:"p"},"not")," exist in the system state and are not written beforehand to ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),". They are tuples that are sent alongside the Check request and will be treated as ",(0,o.kt)("em",{parentName:"p"},"if")," they already exist in the state for the context of that particular Check call. That means that Anne can be using two different sessions, each within a different organization context, and ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will correctly respond to each one with the correct authorization decision."),(0,o.kt)("p",null,"First, we will undo the ",(0,o.kt)("a",{parentName:"p",href:"#add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context"},"temporary step")," and remove the stored tuples for which Anne has a ",(0,o.kt)("inlineCode",{parentName:"p"},"user_in_context")," relation with ",(0,o.kt)("inlineCode",{parentName:"p"},"organization:A"),"."),(0,o.kt)(r.Gb,{deleteRelationshipTuples:[{_description:"Delete stored tuples where Anne is authorizing from the context of organization:A",user:"user:anne",relation:"user_in_context",object:"organization:A"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("p",null,"Next, when Anne is connecting from the context of organization A, ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will return ",(0,o.kt)("inlineCode",{parentName:"p"},'{"allowed":true}'),":"),(0,o.kt)(r.uT,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0,contextualTuples:[{_description:"Anne is authorizing from the context of organization:A",user:"user:anne",relation:"user_in_context",object:"organization:A"}],mdxType:"CheckRequestViewer"}),(0,o.kt)("p",null,"When Anne is connecting from the context of organization C, ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will return ",(0,o.kt)("inlineCode",{parentName:"p"},'{"allowed":false}'),":"),(0,o.kt)(r.uT,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!1,skipSetup:!0,contextualTuples:[{_description:"Anne is authorizing from the context of organization:A",user:"user:anne",relation:"user_in_context",object:"organization:C"}],mdxType:"CheckRequestViewer"}),(0,o.kt)("p",null,"Using this, you can check that the following requirements are satisfied:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"User"),(0,o.kt)("th",{parentName:"tr",align:null},"Organization Context"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Allowed"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Anne"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization A"),(0,o.kt)("td",{parentName:"tr",align:null},"View"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Anne"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization B"),(0,o.kt)("td",{parentName:"tr",align:null},"View"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Anne"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization C"),(0,o.kt)("td",{parentName:"tr",align:null},"View"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Anne"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization A"),(0,o.kt)("td",{parentName:"tr",align:null},"Delete"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Anne"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization B"),(0,o.kt)("td",{parentName:"tr",align:null},"Delete"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Anne"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization C"),(0,o.kt)("td",{parentName:"tr",align:null},"Delete"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Beth"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization B"),(0,o.kt)("td",{parentName:"tr",align:null},"View"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Beth"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization B"),(0,o.kt)("td",{parentName:"tr",align:null},"Delete"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Carl"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization C"),(0,o.kt)("td",{parentName:"tr",align:null},"View"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Carl"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization C"),(0,o.kt)("td",{parentName:"tr",align:null},"Delete"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Final version of the Authorization Model and Relationship tuples"),(0,o.kt)(r.lG,{configuration:{type_definitions:[{type:"user"},{type:"organization",relations:{member:{this:{}},project_manager:{intersection:{child:[{this:{}},{computedUserset:{object:"",relation:"user_in_context"}}]}},base_project_editor:{union:{child:[{this:{}},{computedUserset:{object:"",relation:"project_manager"}}]}},project_editor:{intersection:{child:[{computedUserset:{object:"",relation:"base_project_editor"}},{computedUserset:{object:"",relation:"user_in_context"}}]}},user_in_context:{this:{}}}},{type:"project",relations:{owner:{this:{}},partner:{this:{}},manager:{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_manager"}}},editor:{union:{child:[{computedUserset:{object:"",relation:"manager"}},{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_editor"}}},{tupleToUserset:{tupleset:{object:"",relation:"partner"},computedUserset:{object:"",relation:"project_editor"}}}]}},can_delete:{computedUserset:{object:"",relation:"manager"}},can_edit:{computedUserset:{object:"",relation:"editor"}},can_view:{computedUserset:{object:"",relation:"editor"}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)(r.Gb,{relationshipTuples:[{_description:"Anne has a `project manager` role at organization A",user:"user:anne",relation:"project_manager",object:"organization:A"},{_description:"Anne has a `project manager` role at organization B",user:"user:anne",relation:"project_manager",object:"organization:B"},{_description:"Anne has a `project manager` role at organization C",user:"user:anne",relation:"project_manager",object:"organization:C"},{_description:"Beth has a `project manager` role at organization B",user:"user:beth",relation:"project_manager",object:"organization:B"},{_description:"Carl has a `project manager` role at organization C",user:"user:carl",relation:"project_manager",object:"organization:C"},{_description:"Organization A owns Project X",user:"organization:A",relation:"owner",object:"project:X"},{_description:"Project X is shared with Organization B",user:"organization:B",relation:"partner",object:"project:X"}],skipSetup:!0,mdxType:"WriteRequestViewer"})),(0,o.kt)("admonition",{title:"Warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Contextual tuples:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Are not persisted in the store."),(0,o.kt)("li",{parentName:"ul"},"Are only supported on the ",(0,o.kt)(r.DC,{link:"/api/service#Relationship%20Queries/Check",name:"Check API endpoint",mdxType:"UpdateProductNameInLinks"}),". They are not supported on read, expand and other endpoints."),(0,o.kt)("li",{parentName:"ul"},"If you are using the ",(0,o.kt)(r.DC,{link:"/api/service#Relationship%20Tuples/ReadChanges",name:"Read Changes API endpoint",mdxType:"UpdateProductNameInLinks"})," to build a permission aware search index, note that it will not be trivial to take contextual tuples into account."))),(0,o.kt)("h2",{id:"related-sections"},"Related Sections"),(0,o.kt)(r.$q,{description:"Check the following sections for more on how user groups can be used.",relatedLinks:[{title:"Modeling with Multiple Restrictions",description:"Learn how to model requiring multiple relationships before users are authorized to perform certain actions.",link:"./multiple-restrictions",id:"./multiple-restrictions.mdx"},{title:"Contextual and Time-Based Authorization",description:"Learn how to authorize access that depends on dynamic or contextual criteria.",link:"./contextual-time-based-authorization",id:"./contextual-time-based-authorization.mdx"},{title:"{ProductName} Check API",description:"Details on the Check API in the {ProductName} reference guide.",link:"/api/service#Relationship%20Queries/Check"}],mdxType:"RelatedSection"}))}d.isMDXComponent=!0}}]);