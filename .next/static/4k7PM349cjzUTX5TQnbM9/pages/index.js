(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RNiq:function(e,a,n){"use strict";n.r(a);var s=n("o0o1"),t=n.n(s),r=n("q1tI"),i=n.n(r),c=n("vcXL"),l=n.n(c),u=n("CafY"),o=n("HwkA"),p=n("GEn4"),w=n("cNUq"),d=i.a.createElement,b=function(e){return d(u.a,null,d(w.a,{style:{margin:"30px"},articles:e.newsUs}),d(p.a,{style:{margin:"30px"},articles:e.newsId}),d(o.a,{style:{margin:"30px"},headline:e.headlineSg,articles:e.newsSg}))};b.getInitialProps=function(){var e,a,n,s,r,i,c,u,o;return t.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,t.a.awrap(l()("http://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac"));case 2:return e=p.sent,p.next=5,t.a.awrap(l()("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac"));case 5:return a=p.sent,p.next=8,t.a.awrap(l()("http://newsapi.org/v2/top-headlines?country=sg&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac"));case 8:return n=p.sent,p.next=11,t.a.awrap(e.json());case 11:return s=p.sent,p.next=14,t.a.awrap(a.json());case 14:return r=p.sent,p.next=17,t.a.awrap(n.json());case 17:return i=p.sent,c=s.articles.slice(0,8),u=r.articles.slice(0,8),o=i.articles.slice(1,8),p.abrupt("return",{headlineUs:r.articles[0],headlineSg:i.articles[0],newsUs:u,newsId:c,newsSg:o});case 22:case"end":return p.stop()}}),null,null,null,Promise)},a.default=b},vlRD:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,4,3]]]);