	//js批量抓取百度分享，没做什么优化，能实现，扔在分享页即可
	var aUrl=[],
		newUrl;
	index=0;

	function getpage(){
		var nFrame=document.createElement('iframe'),
			body=document.getElementsByClassName("brieftext")[0],
			nFrame=body.appendChild(nFrame),
			newFrame=document.getElementsByTagName("iframe"),
			len;
		len=$(".inline-file-col a").length;
		nFrame.style.width="600px";
		nFrame.style.height="600px";
		nFrame.src=location.href;
		nFrame.onload = function(){
			var nframe=document.getElementsByTagName("iframe")[document.getElementsByTagName("iframe").length-1],
				idocument=nframe.contentWindow.document;	
				$(idocument.getElementsByClassName("inline-file-col")).find("a").each(function(index,val){
					aUrl.push(val.href);
				})
				function getNextPage(){
					console.log(+$(idocument.getElementsByClassName("page-input")).val());
					if(+$(idocument.getElementsByClassName("page-input")).val() >= +$(idocument.getElementsByClassName("page-all")).html()){
							getNextPage="";
							clearTimeout(timer1);
							set();
					}
					 timer1 = setTimeout(function(){
						idocument.getElementsByClassName("page-next")[0].click();
						setTimeout(function(){
							$(idocument.getElementsByClassName("inline-file-col")).find("a").each(function(index,val){
								aUrl.push(val.href);
							})
						},100)
						timer1 = setTimeout(getNextPage,2000);
					},1000);
				}
				setTimeout(getNextPage,1000)
		}
	}
	getpage()
	function set(){
		newUrl = aUrl.filter(function(val,index){
			return val !="javascript:;";
		})
		if(index >= newUrl.length){
			
			set ="";
			alert("全部完成了！");
			clearTimeout(timer);
		}
		var nFrame=document.createElement('iframe'),
			body=document.getElementsByClassName("brieftext")[0],
			nFrame=body.appendChild(nFrame),
			newFrame=document.getElementsByTagName("iframe"),
			len;
		len=$(".inline-file-col a").length;
		nFrame.style.width="600px";
		nFrame.style.height="600px";
		nFrame.src=newUrl[index++];
		nFrame.onload = function(){
			var nframe=document.getElementsByTagName("iframe")[document.getElementsByTagName("iframe").length-1],
			idocument=nframe.contentWindow.document,
			chk=idocument.getElementsByClassName("check-icon"),
			input=idocument.getElementsByClassName("g-button-right");
			if(!(chk[0] || input[0])){
				body.removeChild(nFrame);
				setTimeout(set,1000)
			}
			if(chk[0]){
				chk[0].click();
				input[0].click();
			}else{
				input[0].click();
			}
			
			timer = setTimeout(function(){
				   $(idocument.getElementsByClassName("treeview-txt")).each(function(index,val){
				   		if(val.innerHTML == "我的资源"){
				   			val.click();
				   		}
				   	})
				   	setTimeout(function(){
				   		var input=idocument.getElementsByClassName("g-button-right");
				   		if(idocument.getElementsByClassName("list-view-item").length > 1){
				   			input[input.length-1].click();
				   			setTimeout(function(){
				   				idocument.getElementsByClassName("plus-create-folder")[0].getElementsByTagName('span')[0].click();
				   			},200)
				   		}
				   		setTimeout(function(){
				   			input[input.length-2].click();
							setTimeout(function(){
								body.removeChild(nFrame);
								timer=setTimeout(set,1000)
							},1000)
							
						}, 1000);
					}, 1000);
				},1000) 
		}
	}









