SEMICOLON.Core.getVars.fn.twitter=e=>{var t=SEMICOLON.Core;if(t.initFunction({class:"has-plugin-twitter",event:"pluginTwitterFeedReady"}),(e=t.getSelector(e,!1,!1)).length<1)return!0;e.forEach(a=>{let s=a.getAttribute("data-username")||"twitter",r=a.getAttribute("data-count")||3,e=a.getAttribute("data-loader")||"include/twitter/tweets.php",t=a.getAttribute("data-fetch-message")||"Fetching Tweets from Twitter...",i=a.querySelector(".twitter-widget-alert");i||((i=document.createElement("div")).classList.add("alert","alert-warning","twitter-widget-alert","text-center"),a.prepend(i),i.innerHTML='<div class="spinner-grow spinner-grow-sm me-2" role="status"><span class="visually-hidden">Loading...</span></div> '+t),fetch(e+"?username="+s).then(e=>e.json()).then(e=>{i.remove();let t=0;if(e.data?.some(e=>{t!=Number(r)&&(CanvasTweetBuild(e,a,s),t++)}),a.classList.contains("fslider")){let e=setInterval(()=>{1<a.querySelectorAll(".slide").length&&(a.classList.remove("customjs"),setTimeout(()=>{SEMICOLON.Modules.flexSlider(),jQuery(a).find(".flexslider .slide").resize()},500),clearInterval(e))},1e3)}}).catch(e=>{console.log(e),i.classList.remove("alert-warning"),i.classList.add("alert-danger"),i.innerHTML="Could not fetch Tweets from Twitter API. Please try again later."})})};const CanvasTweetBuild=(e,t,a)=>{var s,r=t.getAttribute("data-font-class")||"font-body",i=e.text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,e=>'<a href="'+e+'" target="_blank">'+e+"</a>").replace(/\B@([_a-z0-9]+)/gi,e=>e.charAt(0)+'<a href="https://twitter.com/'+e.substring(1)+'" target="_blank">'+e.substring(1)+"</a>");t.classList.contains("fslider")?((s=document.createElement("div")).classList.add("slide"),s.innerHTML+='<p class="mb-3 '+r+'">'+i+'</p><small class="d-block"><a href="https://twitter.com/'+a+"/statuses/"+e.id+'" target="_blank">'+CanvasRelativeTime(e.created_at)+"</a></small>",t.querySelector(".slider-wrap").append(s)):t.innerHTML+='<li><i class="fa-brands fa-twitter"></i><div><span>'+i+'</span><small><a href="https://twitter.com/'+a+"/statuses/"+e.id+'" target="_blank">'+CanvasRelativeTime(e.created_at)+"</a></small></div></li>"},CanvasRelativeTime=e=>{var e=new Date(e),t=new Date,e=parseInt((t.getTime()-e)/1e3);return(e+=60*t.getTimezoneOffset())<60?"less than a minute ago":e<120?"about a minute ago":e<3600?parseInt(e/60).toString()+" minutes ago":e<7200?"about an hour ago":e<86400?"about "+parseInt(e/3600).toString()+" hours ago":e<172800?"1 day ago":parseInt(e/86400).toString()+" days ago"};