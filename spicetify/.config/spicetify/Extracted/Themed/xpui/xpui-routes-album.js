"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2342],{15632:(e,a,i)=>{i.d(a,{g:()=>s});var n=i(69736),l=i(63068),t=i(11527);const s=({children:e})=>(0,t.jsx)(n.x,{variant:"bodySmall",className:l.Z.pretitle,children:e})},66873:(e,a,i)=>{i.d(a,{x:()=>m});var n=i(50959),l=i(76950),t=i(50540),s=i(30374),r=i(2990),o=i(71459),c=i(8499),d=i(11527);const m=({children:e,action:a,uri:i})=>{const m=(0,t.g)(),u=(0,r.j)();let g;const h=()=>{const e={triggerId:c.K,triggerAction:{type:a}};o.y.set((a=>({...a,...e}))),u.storeAction(s.wH,{operation:l.pT.ADD,uris:[i]})};try{g=n.Children.only(e)}catch(a){return(0,d.jsx)(d.Fragment,{children:e})}return m?n.cloneElement(g,{onClick:h}):(0,d.jsx)(d.Fragment,{children:e})}},30521:(e,a,i)=>{i.r(a),i.d(a,{default:()=>Ge});i(86277);var n=i(50959),l=i(82187),t=i.n(l),s=i(75390),r=i(35869),o=i(75802),c=i(69736),d=i(87025),m=i(80859),u=i(10226),g=i(93175),h=i(85648),b=i(29770),k=i(20580),p=i(16972),x=i(41038),y=i(97922),v=i(81639),j=i(16118),f=i(91643),N=i(57986),I=i(20069);const S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumMerch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albumUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"merch"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumMerchItem"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumMerchItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Merch"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"price"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]};var w=i(18118);const A="iEG0moJ3mt1_j9Lho7MA";var C=i(11527);const L=({albumName:e,albumURI:a})=>{const{data:i}=(n={uri:a},l={gcTime:5*I.y},(0,I.a)(S,n,l));var n,l;const t=i?.albumUnion&&"merch"in i.albumUnion?i?.albumUnion?.merch?.items:[];return t&&t?.length>0?(0,C.jsx)("div",{className:"contentSpacing",children:(0,C.jsx)("div",{className:A,children:(0,C.jsx)(w.s,{id:e,uri:a,merchItems:t,merchVariant:"Album page merch items"})})}):null};var P=i(19848),U=i(32793),F=i(47262),M=i(66713),T=i(23255),R=i(22527),E=i(29673),B=i(80626),V=i(82857),O=i(43104),D=i(80683),z=i(67408),_=i(22795),q=i(47895),Q=i(15842),Y=i(66205),Z=i(38338),H=i(57562),W=i(97013),K=i(66873),X=i(66819),$=i(13734),J=i(9443),G=i(64222),ee=i(91529),ae=i(25230),ie=i(72417);const ne="album-albumPage-sectionWrapper",le="zddjxV2lX9ukNM5QXloA",te="lVqlPjQLuQhK2flsxB78",se="O_EguRjsZ4uI1hHamkOA",re="jcaQQxoVnuuhtVwDJU1R",oe="x-album-releasesDropdown",ce="in4OjUTflcsoj9RUpf05",de="xaPiqLlyzjAbzAaXfU1y",me="vveb4Rn0dK_r8YUM7L_n",ue=n.memo((function({uri:e,togglePlay:a,isPlaying:i,isActive:l,spec:t,logger:s,backgroundColor:r,name:o,artists:c,isPlayable:d,sharingInfo:m}){const u=(0,$.o)(),g=(0,J.k)(),b=(0,_.y)(),x=(0,n.useMemo)((()=>t.actionBarFactory()),[t]),[y,v]=(0,_.Z)(e),j=(0,n.useCallback)((()=>{const n=(0,G.aK)({isPlaying:i,isActive:l,spec:x.playButtonFactory(),logger:s,uri:e});a({loggingParams:n})}),[i,l,a,x,s,e]),f=(0,n.useCallback)((async()=>{let a;const i=x.saveButtonFactory();a=y?i.hitDislike({itemToBeDisliked:e}):i.hitLike({itemToBeLiked:e}),s.logInteraction(a),u({targetUri:e,intent:y?"unsave":"save",type:"click"});try{await v(!y)}catch{}}),[u,e,y,v,x,s]),I=(0,ie.Q)(),S=(0,X.j)();return(0,C.jsx)(Q.o,{backgroundColor:r,children:(0,C.jsxs)(Y.F,{children:[(0,C.jsx)(N.$,{onClick:j,disabled:!d,isPlaying:i,size:S,uri:e}),I&&(0,C.jsx)(B.Nh,{spec:x,children:(0,C.jsx)(ae.K,{entityName:o,contextUri:e,activationPlacement:"bottomEnd",size:S})}),(0,C.jsx)(K.x,{uri:e,action:ee.sr.SAVE_ALBUM,children:(0,C.jsx)(Z.H,{isAdded:!!y,onClick:f,disabled:!g&&!b?.getCapabilities().canModifyOffline,size:S})}),(0,C.jsx)(H.o,{uri:e,isFollowing:!!y,onClick:(a,i)=>(0,G.l7)(i,x.downloadButtonFactory(),s,e),onFollow:f,size:S}),(0,C.jsx)(k.yj,{onShow:()=>(0,G.qq)(x,s),menu:(0,C.jsx)(p.Y,{uri:e,artistUri:c?.[0]?.uri,sharingInfo:m}),children:(0,C.jsx)(W.z,{label:h.ag.get("more.label.context",o),size:S})}),(0,C.jsx)("div",{className:me,children:(0,C.jsx)(D.F,{property:q.FM,renderNewExperience:()=>(0,C.jsx)(z.A,{options:[],onSelect:()=>{},selected:null,enableViewModeMenu:!0})})})]})})}));var ge=i(41981);const he=864e5,be=365.25*he;var ke=i(15632),pe=i(9108),xe=i(36255),ye=i(39600),ve=i(40234),je=i(58301),fe=i(17676);var Ne=i(1142),Ie=i(48948),Se=i(11317),we=i(51450),Ae=i(50540),Ce=i(24071),Le=i(95504),Pe=i(91530),Ue=i(87350);var Fe=i(62116),Me=i(68007),Te=i(40537),Re=i(80515),Ee=i(58912);const Be="TCmZzqInstJMZjkHgnw3",Ve="PeNI572tTpqsN23o3QhJ",Oe="oUsSfFiifMPXqW0kHjR6",De="XKvEMQZlPfPncTqiitM5",ze="GdbPVlmUCW0Q6ZZ0z0wh",_e="Hu7O5y7x5c7wUYFbnIoS",qe=n.memo((function(e){const{images:a,title:i,isOpen:l,onClose:t}=e,s=(0,n.useMemo)((()=>(0,Ee.X)(a,{desiredSize:1e4})),[a]);return s?(0,C.jsx)(Te.Z,{className:Be,isOpen:l,onRequestClose:t,animation:{modal:{base:De,afterOpen:ze,beforeClose:_e}},animated:!0,children:(0,C.jsxs)("div",{style:{"--image-width":`${s.width}px`,"--image-height":`${s.height}px`},className:Ve,children:[(0,C.jsx)(Re.E,{loading:"eager",alt:i,src:s.url,className:Oe}),(0,C.jsx)(Me.o,{onClick:t,semanticColor:"textBase",children:h.ag.get("web-player.cover-art-modal.close")})]})}):null}));var Qe=i(6807),Ye=i(14892);const Ze=({releases:e})=>(0,C.jsx)(Qe.v,{children:e.map((e=>(0,C.jsx)(Ye.s,{role:"menuitem",to:(0,Se.EC)(e.uri).toURLPath(!0),children:e.name},e.uri)))});var He=i(43192),We=i(50760),Ke=i(78947);const Xe=n.lazy((()=>i.e(4373).then(i.bind(i,4373))));function $e(e){switch(e){case We.V.Single:return h.ag.get("single");case We.V.Ep:return h.ag.get("ep");case We.V.Compilation:return h.ag.get("compilation");case We.V.Audiobook:return h.ag.get("card.tag.audiobook");case We.V.Album:default:return h.ag.get("album")}}const Je=({uri:e,album:a})=>{const i=(0,o.TH)(),{spec:l,logger:f,UBIFragment:I}=(0,B.fU)(g.w,{data:{uri:e}}),S=(0,n.useMemo)((()=>l.trackListFactory()),[l]),w=(0,n.useMemo)((()=>l.moreByArtistShelfFactory()),[l]),A=a.moreAlbumsByArtist,T=parseInt(new URLSearchParams((0,o.TH)().search).get("index")||"0",10),D=(0,U.Y)(e),{usePlayContextItem:z,togglePlay:_,isPlaying:q,isActive:Q}=(0,R.n)({uri:D},{featureIdentifier:"album"}),Y=(0,n.useCallback)(((e,a)=>{if(l){const e=l.headerFactory().artistNameFactory().hitUiNavigate({destination:a.creator.uri});f.logInteraction(e)}}),[f,l]),{isOpen:Z,openModal:H,closeModal:W}=(()=>{const[e,a]=(0,n.useState)(!1);return{isOpen:e,openModal:(0,n.useCallback)((()=>a(!0)),[]),closeModal:(0,n.useCallback)((()=>a(!1)),[])}})(),K=(0,u.W6)(fe.DUY,{loadingValue:!1})?{onClick:H,ariaLabel:h.ag.get("web-player.album.open_coverart_modal")}:{},X=(0,n.useCallback)((()=>new URLSearchParams(i.search.slice(1)).get("highlight")||""),[i.search]),$=a.uri,J=a.name,G=a.albumType,ee=a.release?.date,ae=a.release?.precision,ie=a.nrTracks,me=a.images,Me=a.extractedColors?.colorRaw.hex,Te=a.artists,Re=a.isPlayable,Ee=a.isCatalogueRestricted,Be=a.copyright.items,Ve=a.courtesyLine,Oe=a.duration.durationMs,De=a.duration.isEstimate,ze=X(),_e=(0,r.v9)(Ue.Gg),Qe=_e.overrides?.locale??h.ag.getLocaleForTranslation(),Ye=(0,Fe.k)({uri:e,type:"locale"}),He=(0,E.OT)({albumName:J,albumType:G,albumArtists:Te.map((e=>e.name)).join(h.ag.getSeparator()),shouldLocalize:Ye,i18n:h.ag});(0,F.Y5)(Me||null);const{albumILRAboveEnabled:We,albumILRBelowEnabled:Je}=(()=>{const e=(0,je.E)(),a=(0,o.TH)(),i=(0,u.W6)(fe.t2x),n=(0,ye.vI)(ve.k.ILRAlbumAbove,a),l=(0,ye.vI)(ve.k.ILRAlbumBelow,a);return e?{albumILRAboveEnabled:!l&&(n||i===fe.wPk.ABOVE),albumILRBelowEnabled:!n&&(l||i===fe.wPk.BELOW)}:{albumILRAboveEnabled:!1,albumILRBelowEnabled:!1}})(),Ge=function(e){return(0,n.useMemo)((()=>{if(!e?.date)return null;if("day"===e.precision){const a=new Date(e.date),i=(new Date).getTime()-a.getTime(),n=i%be;return n<3.5*he||n>312552e5?Math.round(i/be):null}return null}),[e])}(a.release),{isCompactMode:ea}=(0,P.mJ)(),aa=(e=>{const a=(0,Ae.g)(),i=(0,Ce.s4)(),l=(0,u.W6)(fe.t2x),t=(0,r.v9)(Ue.n5),s=(0,r.v9)(Pe.rZ);return(0,n.useCallback)((async()=>{if(!(0,Se.YF)(e))return;const n={category:"album_ilr_component_visible",action:"viewed",variant:l,label:"dwp",os:(0,Le.y)(),context:e,country:t?s:"",sp_t:(0,we.vQ)("sp_t")};a?i.send((0,Ie.k)(n)):i.send((0,Ne.x)(n))}),[e,s,i,a,t,l])})(e),{ref:ia,inView:na}=(0,s.YD)({threshold:0});return(0,n.useEffect)((()=>{na&&aa()}),[na,aa]),(0,C.jsxs)("section",{className:ne,"data-testid":"album-page",children:[(0,C.jsx)(x.$,{children:He}),null!==Ge?(0,C.jsx)(n.Suspense,{fallback:null,children:(0,C.jsx)(Xe,{colorLight:a?.extractedColors?.colorLight.hex,colorDark:a?.extractedColors?.colorDark.hex,name:J,years:Ge})}):null,(0,C.jsxs)(y.gF,{backgroundColor:Me,children:[(0,C.jsxs)(v.W,{children:[(0,C.jsx)(N.$,{size:"medium",onClick:()=>_(),disabled:!Re,isPlaying:q,uri:e}),(0,C.jsx)(j.i,{text:J,dragUri:e,dragLabel:J})]}),(0,C.jsx)(k._P,{menu:(0,C.jsx)(p.Y,{uri:a.uri,artistUri:Te?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,C.jsx)(y.Oz,{dragUri:$,images:me,name:J,placeholderType:"album",...K})}),(0,C.jsxs)(y.sP,{children:[(0,C.jsx)(ke.g,{children:$e(G)}),(0,C.jsx)(k._P,{menu:(0,C.jsx)(p.Y,{uri:a.uri,artistUri:Te?.[0]?.uri,sharingInfo:a.sharingInfo}),children:(0,C.jsx)(y.xd,{dragUri:a.uri,dragLabel:a.name,scaleAtMinWidth:y.vz,children:J})}),(0,C.jsx)(y.QS,{creators:Te,onCreatorClick:Y,releaseDate:ee,releaseDatePrecision:ae,totalItems:ie,durationMilliseconds:Oe,isEstimatedDuration:De,hasTracks:!0})]})]}),(0,C.jsx)(ue,{backgroundColor:Me,uri:e,togglePlay:_,isPlaying:q,isActive:Q,spec:l,logger:f,sharingInfo:a.sharingInfo,name:a.name,artists:a.artists,isPlayable:a.isPlayable}),Ee?(0,C.jsxs)("div",{className:le,children:[(0,C.jsx)(c.x,{as:"h2",variant:"bodyMediumBold",className:te,children:h.ag.get("windowed.product-album-header")}),(0,C.jsx)("div",{className:se,children:h.ag.get("windowed.product-album-description")})]}):null,(0,C.jsxs)("div",{className:"contentSpacing",children:[(0,C.jsx)(I,{spec:S,children:(0,C.jsx)(ge.L,{ariaLabel:J,nrTracks:(0,Ke.y)(a.discs)?a.discs.totalCount+ie:ie,discs:a.discs,albumUri:$,highlightUri:ze,scrollToIndex:T,usePlayContextItem:z,initalTracks:a.items,isCompactMode:ea})}),(0,C.jsxs)("div",{className:ce,children:[(0,C.jsxs)("div",{children:[ee&&(0,C.jsx)(c.x,{as:"p",variant:"bodySmall",children:(0,O.BI)((0,O.RX)(ee),Qe,{year:"numeric",month:"long",day:"numeric"},ae)}),(0,C.jsx)(M.k,{copyrights:Be,courtesyLine:Ve})]}),a.releases.items.length>0&&(0,C.jsx)(k.xV,{menu:(0,C.jsx)(Ze,{releases:a.releases.items}),children:(e,i,n)=>(0,C.jsxs)("button",{ref:n,className:oe,type:"button",onClick:i,children:[(0,C.jsx)(c.x,{variant:"bodySmall",children:h.ag.get("album-page.more-releases",a.releases.items.length)}),e?(0,C.jsx)(d.U,{size:"small"}):(0,C.jsx)(m.i,{size:"small"})]})})]})]}),We&&(0,C.jsx)("div",{className:t()("contentSpacing",de),"data-testid":"placeholder-album-ilr-above",children:(0,C.jsx)(pe.y,{subtitle:h.ag.get("internal-link-recommender.based-on-this-album"),uri:a.uri,inViewRef:ia,entityType:V.p.ALBUM})}),(0,C.jsx)(L,{albumName:J,albumURI:$}),(0,C.jsxs)(C.Fragment,{children:[A?.length>0&&(0,C.jsx)("div",{className:"contentSpacing",children:(0,C.jsx)(I,{spec:w,children:(0,C.jsx)(xe.q,{index:0,id:"more-albums",className:re,title:h.ag.get("album-page.more-by-artist",Te?.[0]?.name),total:A.length,seeAllUri:`${Te?.[0]?.uri.replace("artist","app:artist")}:discography`,seeAllLabel:h.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,children:A.map(((e,a)=>(0,C.jsx)(b.i,{index:a,artists:Te,images:e.images||[],name:e.name,uri:e.uri,year:e.year,type:e.albumType,sharingInfo:e.sharingInfo},e.uri)))})})}),Je&&(0,C.jsx)("div",{className:t()("contentSpacing",de),"data-testid":"placeholder-album-ilr-below",children:(0,C.jsx)(pe.y,{subtitle:h.ag.get("internal-link-recommender.based-on-this-album"),uri:a.uri,inViewRef:ia,entityType:V.p.ALBUM})})]}),(0,C.jsx)(qe,{title:He,isOpen:Z,onClose:W,images:me})]})},Ge=n.memo((function(){const{albumId:e}=(0,o.UO)(),a=`spotify:album:${e}`,{loading:i,error:n,data:l,canLoadOffline:t}=(0,He.j)(a);return i||!l?(0,C.jsx)(f.h,{hasError:null!==n,loadOffline:t,errorMessage:h.ag.get("error.not_found.title.album")}):(0,C.jsx)(T.fd,{surface:T.Tg.ALBUM,uris:[a],children:(0,C.jsx)(Je,{uri:a,album:l})})}))},39600:(e,a,i)=>{i.d(a,{vI:()=>n});i(86277);const n=(e,a)=>{const i=a?new URLSearchParams(a.search):void 0;return"1"===i?.get(e)}},40234:(e,a,i)=>{i.d(a,{k:()=>n});let n=function(e){return e.I18nSEO="i18nSEO",e.RTPTrackCredits="rtpv2p2",e.I18nAdditionalPages="i18nap",e.RichPlaylistPages="rpp",e.ILRAlbum="ilra",e.ILRAlbumAbove="ilraa",e.ILRAlbumBelow="ilrab",e.ILRShow="ilrs",e.PlaylistInternalTrackLinks="pitl",e.PlaylistInternalTrackAndArtistLinks="pital",e}({})}}]);
//# sourceMappingURL=xpui-routes-album.js.map