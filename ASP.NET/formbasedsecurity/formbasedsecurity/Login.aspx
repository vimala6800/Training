﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="formbasedsecurity.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
             <asp:Label ID="Label1" runat="server" Text="User Name"></asp:Label>
            <asp:TextBox ID="txtUserName" runat="server"></asp:TextBox><br />
            <asp:Label ID="Label2" runat="server" Text="Password"></asp:Label>
            <asp:TextBox ID="txtPassword" runat="server"></asp:TextBox><br />
            <asp:CheckBox ID="chkBoxRememberMe" runat="server" Text="Register Me" />
             <br />
            <asp:Button ID="btnLogin" runat="server" Text="Login" OnClick="btnLogin_Click" /><br/>
            <asp:Label ID="lblMessage" runat="server" Text=""></asp:Label>
            <a href="Registation/Registration.aspx">Registation/Registration.aspx</a>
        </div>
    </form>
</body>
</html>
