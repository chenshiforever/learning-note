	//js批量抓取百度分享，没做什么优化，能实现，扔在分享页即可
	var aUrl=[],
		newUrl;
	$(".inline-file-col a").each(function(index,val){
		aUrl.push(val.href);
	})
	newUrl = aUrl.filter(function(val,index){
		return val !="javascript:;";
	})
	index=0;

	if(index >= newUrl.length){
		clearInterval(timer);
		alert("快点击下一页");
	}
			timer=setInterval(function(){
			var nFrame=document.createElement('iframe'),
			
			body=document.getElementsByClassName("brieftext")[0],
			nFrame=body.appendChild(nFrame),
			newFrame=document.getElementsByTagName("iframe"),
			
			len;
			len=$(".inline-file-col a").length;
			nFrame.style.width="500px";
			nFrame.style.heigth="500px";
			nFrame.src=newUrl[index++];
			setTimeout(function(){
				var nframe=document.getElementsByTagName("iframe")[document.getElementsByTagName("iframe").length-1],
				idocument=nframe.contentWindow.document,
				chk=idocument.getElementsByClassName("chk-ico"),
				input=idocument.getElementById("emphasizeButton");
				
			
				console.log(chk[0],input);
				if(chk[0]){
					console.log(chk[0],input);
					chk[0].click();
					input.click();
						setTimeout(function(){
							var btn1=idocument.getElementById("_disk_id_15");
						btn1.click();
					},1000)
				}else{
					input.click();
					setTimeout(function(){
						var btn2=idocument.getElementById("_disk_id_6");
						console.log(btn2);
						btn2.click();
					},1000)
				}
			},4000)
			},10000);
