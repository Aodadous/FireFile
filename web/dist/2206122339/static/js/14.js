webpackJsonp([14],{A67E:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i("3cXf"),o=i.n(l),a=i("I29D"),s=i.n(a),n={data:function(){return{loading:!1,visible:!1,dialogvisible:!1,uploadVisible:!1,modifyAccountVisible:!1,filecatalogid:"",skillfileCatalogOptions:[],fileList:[],url:"",uploadformdata:new FormData,delfileIds:[]}},created:function(){},methods:{getDataList:function(e,t,i){this.loading=!0,this.$http({url:this.$http.adornUrl("/sys/config/queryrange"),method:"get",params:this.$http.adornParams({start:e,end:t})}).then(function(e){var t=e.data;i(t)})},initSkillfileCatalogOptionsCallback:function(e){if(e&&0===e.code){console.log(o()(e)),this.skillfileCatalogOptions=[];var t=0;for(t in e.config)this.skillfileCatalogOptions.push({value:e.config[t].paramKey,label:e.config[t].paramValue})}this.loading=!1},closeHandle:function(){this.fileList=[]},init:function(e){this.visible=!0,this.getDataList(70,79,this.initSkillfileCatalogOptionsCallback)},dataFormSubmit:function(){this.submitUpload()},handlePreview:function(e){console.log("handlePreview:"+e)},handleRemove:function(e,t){console.log("handleRemove file: "+o()(e)+"!!--!!fileList: "+o()(t))},onUploadStatuChange:function(e,t){this.fileList=t,console.log("onUploadStatuChange file: "+o()(e)+"!!--!!fileList: "+o()(t))},deleteFileHandler:function(e,t){var i=void 0;for(i in this.fileList){var l=this.fileList[i];console.log("fileJson:"+o()(this.fileList[i])+",file uid:"+l.uid+", delUid:"+e)}i>-1&&this.fileList.splice(i,1),console.log("deleted filelist:"+o()(this.fileList))},uploadfile:function(e){console.log(e),this.uploadformdata.append("files",e.file)},submitUpload:function(){var e=this;this.uploadformdata=new FormData,this.$refs.upload.submit();this.isUploadOk=!1,this.isUploading=!0,s.a.post(this.$http.adornUrl("/fenhuo/file/upload?type=1&filecatalogid="+this.filecatalogid+"&token="+this.$cookie.get("token")),this.uploadformdata,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){e.fileList=[],console.log(t),0===t.data.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.$refs.catalogform.resetFields(),e.visible=!1,e.$emit("refreshDataList")}}):500===t.data.code&&e.$message({message:"文件名已存在",type:"error",duration:1500,onClose:function(){e.$refs.catalogform.resetFields(),e.visible=!1,e.$emit("refreshDataList")}})}).catch(function(e){console.log(e)})},uploadSuccess:function(e,t,i){console.log("-----------------------uploadSuccess-------------"),console.log("response:"+o()(e)),console.log("file:"+o()(t)),console.log("fileList:"+o()(i))},handleClick:function(e,t){console.log(e,t)},beforeUpload:function(e){console.log(e);var t=e.name.substring(e.name.lastIndexOf(".")+1),i="xls"===t,l="xlsx"===t,o="doc"===t,a="docx"===t,s="pdf"===t,n="png"===t,r="jpg"===t,c="jpeg"===t,f="ppt"===t,d="pptx"===t,u=e.size/1024/1024<50;return i||l||o||a||s||n||r||c||f||d||this.$message({message:"上传文件只能是 图片、或者文档格式!",type:"warning"}),u||this.$message({message:"上传文件大小不能超过 50MB!",type:"warning"}),(i||l||o||a||s||n||r||c||f||d)&&u}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"项目创建","close-on-click-modal":!1,visible:e.visible,"v-loading":e.loading,width:"50%"},on:{close:e.closeHandle,"update:visible":function(t){e.visible=t}}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-card",{attrs:{shadow:"always"}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-form",{ref:"catalogform",staticStyle:{width:"100%"},attrs:{size:"medium"}},[i("el-form-item",{attrs:{label:"技术文档类别"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择技术文档类别"},model:{value:e.filecatalogid,callback:function(t){e.filecatalogid=t},expression:"filecatalogid"}},e._l(e.skillfileCatalogOptions,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1)],1),e._v(" "),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:19}},[i("el-container",[i("span",[i("h2",{staticStyle:{"line-height":"0px"}},[e._v("技术文档")])])])],1),e._v(" "),i("el-col",{attrs:{span:3,offset:2}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"#",accept:".xls,.xlsx,.doc,.docx,.pdf,.png,.jpg,.jpeg","on-preview":e.handlePreview,"on-change":e.onUploadStatuChange,"before-upload":e.beforeUpload,multiple:"","on-remove":e.handleRemove,"on-success":e.uploadSuccess,"file-list":e.fileList,"show-file-list":!1,"auto-upload":!1,"http-request":e.uploadfile}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("添加文件")])],1)],1)],1),e._v(" "),i("el-divider"),e._v(" "),i("ul",{staticClass:"infinite-list",staticStyle:{overflow:"auto"}},e._l(e.fileList,function(t){return i("el-row",{key:t.uid},[i("li",{staticClass:"infinite-list-item"},[i("el-col",{attrs:{span:8,offset:1}},[i("h3",[e._v(e._s(t.name))])]),e._v(" "),i("el-col",{attrs:{span:5,offset:10}},[i("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(i){e.deleteFileHandler(t.uid,t.name)}}},[e._v("删除")])],1)],1)])}))],1)],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var c=i("46Yf")(n,r,!1,function(e){i("Q8wE")},"data-v-799682a8",null);t.default=c.exports},BFll:function(e,t,i){(e.exports=i("acE3")(!1)).push([e.i,"\n.infinite-list[data-v-799682a8] {\r\n  list-style: none;\n}\n.infinite-list .infinite-list-item[data-v-799682a8] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 50px;\r\n  background: #f1f1f1;\r\n  color: #1b1919;\r\n  margin: 10px 0px;\r\n  border-bottom: black;\r\n  border-bottom-width: thin;\r\n  border-bottom-style: solid;\n}\r\n",""])},Q8wE:function(e,t,i){var l=i("BFll");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);i("XkoO")("6902fcb8",l,!0)}});