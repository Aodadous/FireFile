webpackJsonp([36],{"/caQ":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,paramKey:"",paramValue:"",remark:""},dataRule:{paramKey:[{required:!0,message:"参数名不能为空",trigger:"blur"}],paramValue:[{required:!0,message:"参数值不能为空",trigger:"blur"}]}}},methods:{init:function(a){var e=this;this.dataForm.id=a||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/sys/config/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(a){var t=a.data;t&&0===t.code&&(e.dataForm.paramKey=t.config.paramKey,e.dataForm.paramValue=t.config.paramValue,e.dataForm.remark=t.config.remark)})})},dataFormSubmit:function(){var a=this;this.$refs.dataForm.validate(function(e){e&&a.$http({url:a.$http.adornUrl("/sys/config/"+(a.dataForm.id?"update":"save")),method:"post",data:a.$http.adornData({id:a.dataForm.id||void 0,paramKey:a.dataForm.paramKey,paramValue:a.dataForm.paramValue,remark:a.dataForm.remark})}).then(function(e){var t=e.data;t&&0===t.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.visible=!1,a.$emit("refreshDataList")}}):a.$message.error(t.msg)})})}}},o={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-dialog",{attrs:{title:a.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:a.visible},on:{"update:visible":function(e){a.visible=e}}},[t("el-form",{ref:"dataForm",attrs:{model:a.dataForm,rules:a.dataRule,"label-width":"80px"},nativeOn:{keyup:function(e){if(!("button"in e)&&a._k(e.keyCode,"enter",13,e.key,"Enter"))return null;a.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"参数名",prop:"paramKey"}},[t("el-input",{attrs:{placeholder:"参数名"},model:{value:a.dataForm.paramKey,callback:function(e){a.$set(a.dataForm,"paramKey",e)},expression:"dataForm.paramKey"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"参数值",prop:"paramValue"}},[t("el-input",{attrs:{placeholder:"参数值"},model:{value:a.dataForm.paramValue,callback:function(e){a.$set(a.dataForm,"paramValue",e)},expression:"dataForm.paramValue"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{placeholder:"备注"},model:{value:a.dataForm.remark,callback:function(e){a.$set(a.dataForm,"remark",e)},expression:"dataForm.remark"}})],1)],1),a._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.visible=!1}}},[a._v("取消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(e){a.dataFormSubmit()}}},[a._v("确定")])],1)],1)},staticRenderFns:[]},i=t("46Yf")(r,o,!1,null,null,null);e.default=i.exports}});