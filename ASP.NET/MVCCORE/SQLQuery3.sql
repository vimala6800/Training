CREATE TABLE [dbo].[users](
	[Id] INT NOT NULL PRIMARY KEY identity, 
    [name] VARCHAR(50) NOT NULL, 
    [email] VARCHAR(50) NOT NULL, 
    [mobile] BIGINT NOT NULL, 
    [city] VARCHAR(50) NOT NULL, 
    [location] VARCHAR(50) NOT NULL, 
    [address] VARCHAR(100) NOT NULL, 
    [zipcode] INT NOT NULL, 
    [pasword] VARCHAR(50) NOT NULL, 
    role_id INT NOT NULL Foreign key references roles(roleid) 
    
	
)
