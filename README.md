# BSToCS

> 本系统通过Electron将BS项目转换成CS项目



本系统通过Electron将BS项目转换成CS项目，内置exe，clone后，只需修改pro文件夹即可直接使用

pro文件夹位置为[myele-win32-x64\resources\app\pro](./myele-win32-x64/resources/app/pro)

点击myele-win32-x64的myele.exe文件夹后，会先出现loading界面，然后进入主界面


演示图如下：
一，loading演示图
![loading演示图](http://www.aly1.wang/media/img/cstods/loading1.jpg)
![loading演示图](http://www.aly1.wang/media/img/cstods/loading2.jpg)
![loading演示图](http://www.aly1.wang/media/img/cstods/loading3.jpg)

二，主界面演示图
![主界面演示图](http://www.aly1.wang/media/img/cstods/main1.jpg) 
![主界面演示图](http://www.aly1.wang/media/img/cstods/main2.jpg) 
 
若为静态网页程序
操作方法: 
		将你的程序直接放入pro文件夹; PS:首页名称必须为index.html  
	 
若不是静态网页，而是部署在服务器上的BS程序，则在pro/index.html页面直接跳转到你的url即可  
在它的head里添加
		<script language="javascript" type="text/javascript">  
			window.location.href="你的地址";  
		</script>  
即可

 
本程序依靠electron实现 [electron官方网站](https://www.electronjs.org/)



