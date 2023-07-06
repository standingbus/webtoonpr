var router=new Navigo($("#router").data("homepage"),!1,"#!"),moreRequest={};window.currentRequest=!1,window.currentSearch=!1,$(document).ready(function(){var e=e||{};e.UIEvents=function(){new LazyLoad({elements_selector:".lazy-wide"});$().dropdown&&$(".ui.dropdown").dropdown(),$().tab&&($("#series-tabs .item").tab(),$(".tabular.menu .item").tab()),$().checkbox&&$(".ui.checkbox").checkbox(),$().owlCarousel&&$("#manga-hot-updates").owlCarousel({loop:!0,margin:10,dots:!0,pagination:!0,items:6,responsive:{0:{items:2},600:{items:4},1000:{items:6}}}),$().barrating&&$("#manga-rating").barrating("show",{theme:"bars-1to10",onSelect:function(e,t,a){$(".rate-overlay").removeClass("hide");var s=$("#manga-rating").data("manga-id");$.post("/service/insert_vote",{manga_id:s,rate:e},function(e){e.state||$("body").overhang({type:"error",message:e.errors,duration:1})})}}),$().emojioneArea&&$("#commentData").emojioneArea({container:"#commentData-container",hideSource:!0,autocomplete:!1,events:{keypress:function(e,t){var a=$("#commentData").data("emojioneArea").disabled;if(13==t.which&&!t.shiftKey)return t.preventDefault(),1!=a&&addComment(),!1},emojibtn_click:function(e,t){e.closest(".emojionearea").find(".emojionearea-button-close").click()}}}),$(window).scroll(function(){$(window).scrollTop()>300?$("#jump-up").removeClass("hide"):$("#jump-up").addClass("hide")}),$("#jump-up").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")}),$("form.advanced-search").submit(function(){var e=$(this);return e.find("button[type=submit]").html("Please wait"),$.post("/service/advanced_search",e.serialize(),function(t){$("#advanced-search-results").html(t),e.find("button[type=submit]").html("Search Again")}),!1}),$(".delete-user-list").click(function(){var e=$(this).data("name");return Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&($.get("/service/delete_user_list/"+e),$(this).parent().find("ul").fadeOut(400,function(){$(this).remove()}),$("body").overhang({type:"success",message:"Deleted",duration:1}))}),!1}),$(".collection-items li").hover(function(){$(this).find(".badge").removeClass("hide")},function(){$(this).find(".badge").addClass("hide")}),$(".delete-collection").click(function(){var e=$(this).data("list-id");return Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&($("body").overhang({type:"success",message:"Collection has been deleted!",duration:1}),$.get("/service/delete_collection/"+e),router.navigate("/user-panel/collections"))}),!1}),$(".delete-list-collection-item").click(function(){var e=$(this).data("manga-id"),t=$(this).data("list-id");return $.get("/service/delete_collection_item/"+t+"-"+e),$(this).closest("li").fadeOut(400,function(){$(this).remove()}),!1}),$("#edit_collection").submit(function(){return thisEl=$(this),title=thisEl.find('input[name="name"]').val(),desc=thisEl.find('textarea[name="description"]').val(),error=0,""==title?(thisEl.find('input[name="name"]').addClass("input-border-red"),error=1):thisEl.find('input[name="name"]').removeClass("input-border-red"),thisEl.find(".alert").remove(),0==error&&$.post("/service/edit_collection",thisEl.serialize(),function(e){0==e.state?$.each(e.errors,function(e,t){thisEl.prepend('<div class="alert alert-danger" role="alert" style="text-align: left;"><span class="sr-only">Error:</span>&nbsp;'+t+"</div>")}):thisEl.prepend('<div class="alert alert-info" role="alert" style="text-align: left;"><span class="sr-only">Info:</span>&nbsp;'+e.msg+"</div>")}),!1}),$("#change_password").submit(function(){return thisEl=$(this),password=thisEl.find('input[name="password"]').val(),new_password=thisEl.find('input[name="new_password"]').val(),new_password2=thisEl.find('input[name="new_password2"]').val(),error=0,""==password?(thisEl.find('input[name="password"]').addClass("input-border-red"),error=1):thisEl.find('input[name="password"]').removeClass("input-border-red"),""==new_password?(thisEl.find('input[name="new_password"]').addClass("input-border-red"),error=1):thisEl.find('input[name="new_password"]').removeClass("input-border-red"),""==new_password2?(thisEl.find('input[name="new_password2"]').addClass("input-border-red"),error=1):thisEl.find('input[name="new_password2"]').removeClass("input-border-red"),thisEl.find(".alert").remove(),0==error&&$.post("/service/update_user",thisEl.serialize(),function(e){0==e.state?$.each(e.errors,function(e,t){thisEl.prepend('<div class="alert alert-danger" role="alert" style="text-align: left;"><span class="sr-only">Error:</span>&nbsp;'+t+"</div>")}):thisEl.prepend('<div class="alert alert-info" role="alert" style="text-align: left;"><span class="sr-only">Info:</span>&nbsp;'+e.msg+"</div>")}),!1}),$("body").off("click",".review-content-spoiler p").on("click",".review-content-spoiler p",function(){$(this).parents(".spoiler").removeClass("spoiler"),$(this).parent().fadeOut(100)}),$(".tab .segment-poster-sm").hover(function(){$(this).find(".badge").removeClass("hide")},function(){$(this).find(".badge").addClass("hide")}),$(".delete-list-item").click(function(){var e=$(this).data("id");return $.get("/service/delete_user_list_item/"+e),$(this).closest("li").fadeOut(400,function(){$(this).remove()}),!1}),$(".close-btn").click(function(){return!$(this).hasClass("disabled")&&($(".navigate-next").each(function(){$(this).removeClass("disabled")}),$(".close-btn").removeClass("show"),$(".close-btn").addClass("hide"),$(".a-container").addClass("hide"),$(".ch-images").removeClass("hide"),!1)}),$("ul.advanced-search-categories li").click(function(){var e=$(this),t=$(this).find("i"),a=t.data("id");t.removeClass("-empty"),e.find("input").remove(),0==t.hasClass("icon-minus")&&0==t.hasClass("icon-ok")?(t.addClass("icon-ok"),e.append('<input type="hidden" name="include[]" value="'+a+'">')):t.hasClass("icon-ok")?(t.removeClass("icon-ok").addClass("icon-minus"),e.append('<input type="hidden" name="exclude[]" value="'+a+'">')):t.hasClass("icon-minus")&&(t.removeClass("icon-minus"),t.addClass("-empty"))}),$(".mark-all-read").click(function(){var e=$(this);if("0"==e.data("status"))return!1;e.data("status",0);var t=$(this).data("manga-id"),a=$(this).data("type");return $.post("/service/mark_all_read",{"manga-id":t,type:a},function(t){t.state?($(".episodes-list input[type=checkbox]").each(function(){"read"==a?$(this).prop("checked",1):$(this).prop("checked",0)}),"read"==a?e.closest("div").find("input[type=checkbox]").prop("checked",1):e.closest("div").find("input[type=checkbox]").prop("checked",0)):$("body").overhang({type:"error",message:t.msg,duration:1}),e.data("status",1)}),"read"==a?$(this).data("type","unread"):$(this).data("type","read"),!1}),$(".mark-read").click(function(){var e=$(this);if("0"==e.data("status"))return!1;e.data("status",0);var t=$(this).data("manga-id"),a=$(this).data("chapter-id");return $.post("/service/mark_read",{"manga-id":t,chapter_id:a},function(t){t.msg?$("body").overhang({type:"error",message:t.msg,duration:1}):t.state?e.closest("td").find("input[type=checkbox]").prop("checked",1):e.closest("td").find("input[type=checkbox]").prop("checked",0),e.data("status",1)}),!1}),$(".comments-load-more").click(function(){return $("#review-list .comment-item.hide").each(function(){$(this).removeClass("hide")}),$(this).remove(),!1}),$(".reply-link").click(function(){var e=$(this).data("comment");return $("#comment-"+e).removeClass("hide"),!1}),$(".new_collection").click(function(){var e=$(this);$(this).html();if(void 0!==e.attr("onlyusers"))return $("body").overhang({type:"error",message:"You have to login first.",duration:1}),!1;swal({title:'<h1 class="page-title">New Collection</h1>',html:'<input type="text" id="c-name" placeholder="Collection Name" class="swal2-input"><textarea type="text" id="c-desc" placeholder="Collection Description" class="swal2-input" style="height: 100px;"></textarea><style>.g-recaptcha div { margin: 0 auto }</style>',confirmButtonColor:"#3085d6",confirmButtonText:"New Collection",showCloseButton:!0,showCancelButton:!1,showLoaderOnConfirm:!0,preConfirm:e=>{var t={list_id:0,list_name:$("#c-name").val(),list_desc:$("#c-desc").val()};return $.ajax({type:"POST",url:"/service/collection",dataType:"json",data:t,success:function(e){e?e.state?($("body").overhang({type:"success",message:e.msg,duration:1}),router.navigate("/collections")):$("body").overhang({type:"error",message:e.msg,duration:1}):$("body").overhang({type:"error",message:"Fill in all blank fields.",duration:1})}})},allowOutsideClick:()=>!swal.isLoading()}).then(e=>{}),$(".swal2-input").off("keypress").on("keypress",function(e){13==e.which&&Swal.clickConfirm()})}),$(".report-error").click(function(){thisEl=$(this),swal({title:'<h1 class="page-title">Report Error</h1>',html:'<textarea type="text" id="r-message" placeholder="Message" class="swal2-input" style="height: 100px;"></textarea>',confirmButtonColor:"#3085d6",confirmButtonText:"Report Error",showCloseButton:!0,showCancelButton:!1,showLoaderOnConfirm:!0,preConfirm:e=>{var t={manga_id:thisEl.data("manga-id"),chapter_id:thisEl.data("chapter-id"),message:$("#r-message").val()};return $.ajax({type:"POST",url:"/service/report",dataType:"json",data:t,success:function(e){e?e.state?$("body").overhang({type:"success",message:e.msg,duration:1}):$("body").overhang({type:"error",message:e.msg,duration:1}):$("body").overhang({type:"error",message:"Fill in all blank fields.",duration:1})}})},allowOutsideClick:()=>!swal.isLoading()}).then(e=>{})}),$(".manga-user-actions").click(function(){var e=$(this).data("type"),t=$(this);if("0"==t.data("status"))return!1;t.data("status",0);var a=$(this).html();t.prop("disabled",!0).addClass("disabled").html("Loading");var s="",i={};if("add-to-favorite"==e&&(i.manga_id=$(this).data("manga-id"),s="/service/add_favorite"),"read-later"==e&&(i.manga_id=$(this).data("manga-id"),s="/service/add_watch_list"),"read-later-chapter"==e&&(i.manga_id=$(this).data("manga-id"),i.chapter_id=$(this).data("chapter-id"),s="/service/read_later_chapter"),"subscribe"==e&&(i.manga_id=$(this).data("manga-id"),i.action="new_subscription",s="/service/new_subscription"),"collection"==e)return t.data("status",1),t.prop("disabled",!1).removeClass("disabled").html(a),void 0!==t.attr("onlyusers")?($("body").overhang({type:"error",message:"You have to login first.",duration:1}),!1):void $.get("/service/get_collections",function(e){hide_input="hide",""==e.formatted&&(hide_input=""),swal({title:'<h1 class="page-title">Add Collection</h1>',html:'<select name="collection_id" id="c-listid"><option value="0">Add Collection List</option>'+e.formatted+'</select><br/><input type="text" id="c-name" placeholder="Collection Name" class="swal2-input '+hide_input+'"><textarea type="text" id="c-desc" placeholder="Collection Description" class="swal2-input '+hide_input+'" style="height: 100px;"></textarea><style>.g-recaptcha div { margin: 0 auto }</style>',confirmButtonColor:"#3085d6",confirmButtonText:"Add To Collection",showCloseButton:!0,showCancelButton:!1,showLoaderOnConfirm:!0,preConfirm:e=>{var a={list_id:$("#c-listid").val(),list_name:$("#c-name").val(),list_desc:$("#c-desc").val(),manga_id:t.data("manga-id")};return $.ajax({type:"POST",url:"/service/collection",dataType:"json",data:a,success:function(e){e?e.state?$("body").overhang({type:"success",message:e.msg,duration:1}):$("body").overhang({type:"error",message:e.msg,duration:1}):$("body").overhang({type:"error",message:"Fill in all blank fields.",duration:1})}})},allowOutsideClick:()=>!swal.isLoading()}).then(e=>{}),$(".swal2-input").off("keypress").on("keypress",function(e){13==e.which&&Swal.clickConfirm()}),$("#c-listid").change(function(){$("#c-name").addClass("hide"),$("#c-desc").addClass("hide"),0==$(this).val()&&($("#c-name").removeClass("hide"),$("#c-desc").removeClass("hide"))})});$.post(s,i,function(e){e.state?$("body").overhang({type:"success",message:e.msg,duration:1}):$("body").overhang({type:"error",message:e.errors,duration:1}),t.data("status",1),t.prop("disabled",!1).removeClass("disabled").html(a)})}),$("form.write_comment").submit(function(){return thisEl=$(this),submitBtn=thisEl.find('button[type="submit"]'),"0"!=submitBtn.data("status")&&(submitBtn.data("status",0),submitBtn.text("SENDING"),thisEl.find(".alert").remove(),$.post("/service/write_comment",$(this).serialize(),function(e){if(e.state)thisEl.parent().append('<div class="alert alert-success">'+e.msg+"</div>"),thisEl.remove();else for(var t in e.errors)thisEl.prepend('<div class="alert alert-danger">'+e.errors[t]+"</div>");submitBtn.data("status",1),submitBtn.text("SUBMIT")},"json"),!1)}),$(".write_response").click(function(){$("#write_comment").find("input[name=parent]").val($(this).data("id"))}),$("#comments-scroll").click(function(){$("html, body").animate({scrollTop:$(".write_comment").offset().top-55},500)}),$(".like-dislike").click(function(){return thisEl=$(this),"0"!=thisEl.data("status")&&(thisEl.data("status",0),$.post("/service/comment_"+thisEl.data("type"),{comment_id:thisEl.data("comment-id")},function(e){thisEl.find("span").html(e),thisEl.data("status",1)}),!1)}),$("body").off("click","#share-dialog").on("click","#share-dialog",function(e){e.preventDefault(),current_url=$(this).data("url"),swal({title:"Share",html:'<div>\n<a href="https://www.addtoany.com/share#url='+current_url+'" target="_blank"><img src="https://static.addtoany.com/buttons/a2a.svg" width="32" height="32" style="background-color:royalblue"></a>\n<a href="https://www.addtoany.com/add_to/facebook?linkurl='+current_url+'&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/facebook.svg" width="32" height="32" style="background-color:royalblue"></a>\n<a href="https://www.addtoany.com/add_to/twitter?linkurl='+current_url+'&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/twitter.svg" width="32" height="32" style="background-color:royalblue"></a>\n<a href="https://www.addtoany.com/add_to/email?linkurl='+current_url+'&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/email.svg" width="32" height="32" style="background-color:royalblue"></a>\n</div>',confirmButtonColor:"#3085d6",showCloseButton:!0})}),$("body").off("click","[onlyusers]").on("click","[onlyusers]",function(e){e.preventDefault(),swal({title:'<div id="logo" class="hidden-xs"><a href="/" ></a></div>',html:'<input type="text" id="lb-email" placeholder="Email" class="swal2-input"><input type="password" id="lb-password" placeholder="Password" class="swal2-input"><br/><a id="reset-password" class="ui button secondary ml-xs">Forgot Password?</a><a id="user-register" class="ui button secondary ml-xs signup">Sign Up</a><style>.g-recaptcha div { margin: 0 auto }</style>',confirmButtonColor:"#3085d6",confirmButtonText:"Sign In",showCloseButton:!0,showCancelButton:!1,showLoaderOnConfirm:!0,preConfirm:e=>{var t={email:$("#lb-email").val(),password:$("#lb-password").val(),remember:"1",type:"login"};return $.ajax({type:"POST",url:"/service/login",dataType:"json",data:t,success:function(e){e?e.state?window.location.reload(1):swal.showValidationError("Error: "+e.msg):swal.showValidationError("Fill in all blank fields.")}})},allowOutsideClick:()=>!swal.isLoading()}).then(e=>{}),$(".swal2-input").off("keypress").on("keypress",function(e){13==e.which&&Swal.clickConfirm()})}),$("body").off("click","a.signup").on("click","a.signup",function(e){e.preventDefault(),swal({title:'<div id="logo" class="hidden-xs"><a href="/" ></a></div>',html:'<input type="text" id="si-username" placeholder="Username" class="swal2-input"><input type="text" id="si-email" placeholder="Email Address" class="swal2-input"><input type="password" id="si-password" placeholder="Password" class="swal2-input"><input type="password" id="si-passconf" placeholder="Re Password" class="swal2-input"><br/><style>.g-recaptcha div { margin: 0 auto }</style>',confirmButtonColor:"#3085d6",confirmButtonText:"Sign Up",showCloseButton:!0,showCancelButton:!1,showLoaderOnConfirm:!0,preConfirm:e=>{var t={username:$("#si-username").val(),email:$("#si-email").val(),password:$("#si-password").val(),passconf:$("#si-passconf").val(),action:"register"};return $.ajax({type:"POST",url:"/service/register",dataType:"json",data:t,success:function(e){e?e.state?window.location.reload(1):swal.showValidationError(e.msg):swal.showValidationError("Fill in all blank fields.")}})},allowOutsideClick:()=>!swal.isLoading()}).then(e=>{}),$(".swal2-input").off("keypress").on("keypress",function(e){13==e.which&&Swal.clickConfirm()})}),$("body").off("click","#reset-password").on("click","#reset-password",function(e){e.preventDefault(),swal({title:'<div id="logo" class="hidden-xs"><a href="/" ></a></div>',html:'<input type="text" id="si-email" placeholder="Email Address" class="swal2-input">',confirmButtonColor:"#3085d6",confirmButtonText:"Reset Password",showCloseButton:!0,showCancelButton:!1,showLoaderOnConfirm:!0,preConfirm:e=>{var t={email:$("#si-email").val(),action:"forgot_password"};return $.ajax({type:"POST",url:"/service/forgot_password",dataType:"json",data:t,success:function(e){e?e.state?$("body").overhang({type:"success",message:e.msg,duration:1}):swal.showValidationError(e.msg):swal.showValidationError("Fill in all blank fields.")}})},allowOutsideClick:()=>!swal.isLoading()}).then(e=>{}),$(".swal2-input").off("keypress").on("keypress",function(e){13==e.which&&Swal.clickConfirm()})})},e.Events=function(){$(".mobile-menu-trigger").off("click").on("click",function(e){e.stopPropagation(),$("#primary-sidebar, #wrapper, .triggered-overlay, body").addClass("triggered"),$("#sidebar-inner").focus(),$("[data-navigo]").off("click").on("click",function(){$("#primary-sidebar, #wrapper, .triggered-overlay, body").removeClass("triggered")}),$(".triggered-overlay.triggered").off("click").on("click",function(e){$("#primary-sidebar, #wrapper, .triggered-overlay, body").removeClass("triggered")})}),$("#trigger-filter-sidebar").off("touchstart").on("touchstart",function(e){e.preventDefault(),$("#filter-sidebar").toggleClass("active")}),$(document).off("click touchstart").on("click touchstart",function(e){$("#search-results").hide()}),$(document).off("click touchstart","#search-results").on("click touchstart","#search-results",function(e){e.stopPropagation()}),$("body").keydown(function(e){if($(".chapter").length)if(37==e.keyCode){if($(".close-btn").hasClass("disabled")||$(".close-btn").hasClass("show"))return $("body").overhang({type:"error",message:"Please Skip Ad",duration:1}),!1;$(".ch-prev-page")&&router.navigate($(".ch-prev-page").first().attr("href"))}else if(39==e.keyCode){if($(".close-btn").hasClass("disabled")||$(".close-btn").hasClass("show"))return $("body").overhang({type:"error",message:"Please Skip Ad",duration:1}),!1;$(".ch-next-page")&&router.navigate($(".ch-next-page").first().attr("href"))}}),$(document).off("input","#tvSearch").on("input","#tvSearch",function(e){e.preventDefault();var t=$(this);$(this).parent().children(".deleteicon").show(),""==$(this).val()&&$(this).parent().children(".deleteicon").hide(),$("body").off("click","#search-response a").on("click","#search-response a",function(e){t.val(""),t.parent().children(".deleteicon").hide()});var a=$(this).val(),s="",i="";a&&a.length>=2?($("#search-results").show(),window.currentSearch=$.ajax({type:"POST",url:"/service/search",dataType:"json",data:{dataType:"json",phrase:a},beforeSend:function(e){0!=window.currentSearch&&(window.currentSearch.abort(),window.currentSearch=!1)},success:function(e){window.currentSearch=!1,e&&(e.success?e.type||($.each(e.manga,function(e,t){s+='<li class="segment-poster"><div class="poster poster-md"><div class="poster-media"><a href="'+t.url+'" data-navigo><img src="'+t.image+'"></a></div><div class="poster-subject"><a href="'+t.url+'" data-navigo><h2 class="truncate">'+t.title+'</h2></a><p class="poster-meta truncate"><span class="genres">'+t.alternative_title+"</span></p></div></div></li>"}),i+='<div class="small-heading">Manga</div><div class="dark-segment"><ul class="clearfix" style="flex-wrap: wrap;">'+s+"</ul></div>",$("#search-response").html(i)):$("#search-response").html('<div class="alert ml-md mr-md mb-md" role="alert"><p>No result.</p></div>'))},complete:function(){router.updatePageLinks()}})):($("#search-response").html(""),$("#search-results").hide())})},e.UIEvents(),e.Events();var t=function(t){var a,s=router.lastRouteResolved();if($(".guide-icon-menu").find("li").each(function(){$(this).toggleClass("active",$("a",this).attr("href")=="/"+s.name)}),"/"==t&&$(".guide-icon-menu li").first().addClass("active"),"manga/:slug/:chapter"==s.name||"manga/:slug/:chapter/:page"==s.name?$("#primary-sidebar").addClass("hide"):$("#primary-sidebar").removeClass("hide"),"manga/:slug/:chapter/:page"==s.name&&-1==s.url.search("all-pages")){var i="",r=parseInt(s.params.page)-1;return prea[r]&&($(".close-btn").addClass("disabled").html("Close Ad In <span>5</span>"),(a=5,new Promise((e,t)=>{var s=setInterval(()=>{a--,$(".close-btn span").html(a),a<=0&&(clearInterval(s),e(!0))},1e3)})).then(function(){$(".close-btn").removeClass("disabled").html('Skip Ad <i class="icon-cancel-circled"></i>')}),$(".close-btn").addClass("show"),$(".close-btn").removeClass("hide"),$(".a-container").removeClass("hide").html(prea[r]),$(".navigate-next").each(function(){$(this).addClass("disabled")}),$(".ch-images").addClass("hide")),$(".ch-pages .menu a.active").removeClass("active").removeClass("selected"),$(".ch-pages .text").html("Page "+s.params.page),$(".page-show-type").html('<i class="icon-fire"></i> All Pages'),$(".ch-pages .menu a#page-"+s.params.page).addClass("active").addClass("selected"),""!=chapter.pages[r].url?(i+='<a href="'+chapter.pages[r].url+'" data-navigo>',$(".ch-next-page").replaceWith('<a href="'+chapter.pages[r].url+'" class="item navigate navigate-next ch-next-page" style="margin-left: 25px;" data-navigo>Next Page »</a>')):(i+='<a href="'+chapter.next+'">',console.log("here:"+chapter.next),$(".ch-next-page").replaceWith('<a href="'+chapter.next+'" class="item navigate navigate-next ch-next-page" style="margin-left: 25px;">Next Chapter »</a>')),i+='<img class="lazy-wide" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg==" data-src="'+chapter.pages[r].src+'"></a>',$(".ch-prev-page").html("« Prev Page"),r>=1?($(".ch-next-page").removeClass("right"),void 0===chapter.pages[r-2]?$(".ch-prev-page").removeClass("hide").attr("href",chapter.current):$(".ch-prev-page").removeClass("hide").attr("href",chapter.pages[r-2].url)):($(".ch-prev-page").addClass("hide"),$(".ch-next-page").addClass("right")),$(".ch-images").html(i),e.UIEvents(),$("html, body").animate({scrollTop:123},"slow"),void router.updatePageLinks()}document.body.scrollTop=document.documentElement.scrollTop=0,$("#search-results").hide(),$("#router-view").addClass("loading"),$("#router-view").html('<div class="skeleton-loading"><div class="skeleton-bac-animation"></div><div class="row" style="justify-content: start; padding-bottom: 15px;"><div class="square-list"><div class="square" style="background-color: #181924; width: 70px; height: 15px; margin-top: 10px; margin-bottom: 0px;"></div><div class="square" style="background-color: #181924; width: 150px; height: 32px; margin-top: 10px; margin-bottom: 0px;"></div><div class="square" style="background-color: #181924; width: 100%; height: 45px; margin-top: 30px; margin-bottom: 0px;"></div></div></div><div class="row" style="justify-content: start; padding-top: 0px; padding-bottom: 0px;"><div class="col" style="width: 300px; padding: 0px;"><div class="circle" style="background-color: #181924; width: 100%; height: 450px;"></div></div><div class="col" style="width: 600px; padding-left: 30px;"><div class="square-list"><div class="square" style="background-color: #181924; width: 70px; height: 26px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 30px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 50%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 50px; height: 15px; margin-top: 30px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 50px; height: 15px; margin-top: 10px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 70px; margin-top: 30px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 100px; margin-top: 15px; margin-bottom: 0px;"></div></div></div></div></div>'),void 0===(s=router.lastRouteResolved()).name&&(s.name="/"),router.updatePageLinks(),window.currentRequest=!1,window.currentRequest=$.ajax({url:t,beforeSend:function(e){0!=window.currentRequest&&window.currentRequest.abort(),$(".modals").remove(),$("body").removeClass("dimmable dimmed")}}).done(function(t){if(t.html){if($("#router-view").html(t.html),$("title").html(t.meta.title),$("meta[name=description]").html(t.meta.description),void 0!==t.disqus){console.log("disqus loaded");"undefined"==typeof DISQUS?(a=document,(s=a.createElement("script")).src="https://readmorg.disqus.com/embed.js",s.setAttribute("data-timestamp",+new Date),(a.head||a.body).appendChild(s)):DISQUS.reset({reload:!0,config:function(){this.page.identifier=t.disqus,this.page.url=t.disqus}})}}else $("#router-view").html('<div id="router-view" class="loading"><div class="skeleton-loading"><div class="skeleton-bac-animation"></div><div class="row" style="justify-content: start; padding-bottom: 15px;"><div class="square-list"><div class="square" style="background-color: #181924;width: 100%;height: 70px;margin-top: 10px;margin-bottom: 0px;text-align: center;padding: 15px;"><h3 style="font-size: 35px;color: white;">An error was encountered</h3></div></div></div><div class="row" style="justify-content: start; padding-top: 0px; padding-bottom: 0px;"><div class="col" style="width: 300px; padding: 0px;"><div class="circle" style="background-color: #181924; width: 100%; height: 450px;"></div></div><div class="col" style="width: 600px; padding-left: 30px;"><div class="square-list"><div class="square" style="background-color: #181924; width: 70px; height: 26px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 30px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 50%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 50px; height: 15px; margin-top: 30px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 50px; height: 15px; margin-top: 10px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 70px; margin-top: 30px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 100px; margin-top: 15px; margin-bottom: 0px;"></div></div></div></div></div></div>');var a,s;$("#router-view").removeClass("loading"),e.UIEvents(),router.updatePageLinks(),window.currentRequest=!1}).fail(function(){$("#router-view").html('<div id="router-view" class="loading"><div class="skeleton-loading"><div class="skeleton-bac-animation"></div><div class="row" style="justify-content: start; padding-bottom: 15px;"><div class="square-list"><div class="square" style="background-color: #181924;width: 100%;height: 70px;margin-top: 10px;margin-bottom: 0px;text-align: center;padding: 15px;"><h3 style="font-size: 35px;color: white;">404 Page Not Found</h3></div></div></div><div class="row" style="justify-content: start; padding-top: 0px; padding-bottom: 0px;"><div class="col" style="width: 300px; padding: 0px;"><div class="circle" style="background-color: #181924; width: 100%; height: 450px;"></div></div><div class="col" style="width: 600px; padding-left: 30px;"><div class="square-list"><div class="square" style="background-color: #181924; width: 70px; height: 26px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 30px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 50%; height: 15px; margin-top: 5px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 50px; height: 15px; margin-top: 30px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 50px; height: 15px; margin-top: 10px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 70px; margin-top: 30px; margin-bottom: 0px;"></div></div><div class="square-list"><div class="square" style="background-color: #181924; width: 100%; height: 100px; margin-top: 15px; margin-bottom: 0px;"></div></div></div></div></div></div>'),$("#router-view").removeClass("loading"),window.currentRequest=!1})};router.on(()=>{t("/")}),router.on({"popular-manga":e=>t("/popular-manga"),"popular-manga/:page":e=>t("/popular-manga/"+e.page),"latest-releases":e=>t("/latest-releases"),"latest-releases/:page":e=>t("/latest-releases/"+e.page),"advanced-search":e=>t("/advanced-search"),"manga-list":e=>t("/manga-list/"),"manga-list/:letter":e=>t("/manga-list/"+e.letter),"manga-list/:letter/:sort":e=>t("/manga-list/"+e.letter+"/"+e.sort),"category/:slug":e=>t("/category/"+e.slug),"category/:slug/:sort":e=>t("/category/"+e.slug+"/"+e.sort),"category/:slug/watch/:num":e=>t("/category/"+e.slug+"/watch/"+e.num),"category/:slug/az/:num":e=>t("/category/"+e.slug+"/az/"+e.num),"user-panel/:page":e=>t("/user-panel/"+e.page),"user-panel/collections/:id":e=>t("/user-panel/collections/"+e.id),"pages/:page":e=>t("/pages/"+e.page),collections:e=>t("/collections/"),"collections/:page":e=>t("/collections/"+e.page),"collection/:id":e=>t("/collection/"+e.id),"cast/:slug":e=>t("/cast/"+e.slug),"manga/:slug":e=>t("/manga/"+e.slug),"manga/:slug/:chapter":e=>t("/manga/"+e.slug+"/"+e.chapter),"manga/:slug/:chapter/:page":e=>t("/manga/"+e.slug+"/"+e.chapter+"/"+e.page)})});