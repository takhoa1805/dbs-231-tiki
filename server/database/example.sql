USE [master]
GO
/****** Object:  Database [COMPANY]    Script Date: 11/21/2023 12:34:56 PM ******/
CREATE DATABASE [COMPANY]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'COMPANY', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.KHOAINSTANCE\MSSQL\DATA\COMPANY.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'COMPANY_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.KHOAINSTANCE\MSSQL\DATA\COMPANY_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [COMPANY] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [COMPANY].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [COMPANY] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [COMPANY] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [COMPANY] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [COMPANY] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [COMPANY] SET ARITHABORT OFF 
GO
ALTER DATABASE [COMPANY] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [COMPANY] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [COMPANY] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [COMPANY] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [COMPANY] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [COMPANY] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [COMPANY] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [COMPANY] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [COMPANY] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [COMPANY] SET  DISABLE_BROKER 
GO
ALTER DATABASE [COMPANY] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [COMPANY] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [COMPANY] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [COMPANY] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [COMPANY] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [COMPANY] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [COMPANY] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [COMPANY] SET RECOVERY FULL 
GO
ALTER DATABASE [COMPANY] SET  MULTI_USER 
GO
ALTER DATABASE [COMPANY] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [COMPANY] SET DB_CHAINING OFF 
GO
ALTER DATABASE [COMPANY] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [COMPANY] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [COMPANY] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [COMPANY] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'COMPANY', N'ON'
GO
ALTER DATABASE [COMPANY] SET QUERY_STORE = ON
GO
ALTER DATABASE [COMPANY] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [COMPANY]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 11/21/2023 12:34:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[dname] [varchar](15) NOT NULL,
	[dnumber] [int] NOT NULL,
	[mgrssn] [char](9) NULL,
	[mgrstartdate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[dnumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dependent]    Script Date: 11/21/2023 12:34:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dependent](
	[essn] [char](9) NOT NULL,
	[dependent_name] [varchar](15) NOT NULL,
	[sex] [char](1) NULL,
	[bdate] [date] NULL,
	[relationship] [varchar](8) NULL,
PRIMARY KEY CLUSTERED 
(
	[essn] ASC,
	[dependent_name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dept_locations]    Script Date: 11/21/2023 12:34:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dept_locations](
	[dnumber] [int] NOT NULL,
	[dlocation] [varchar](15) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[dnumber] ASC,
	[dlocation] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 11/21/2023 12:34:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[fname] [varchar](15) NOT NULL,
	[minit] [char](1) NULL,
	[lname] [varchar](15) NOT NULL,
	[ssn] [char](9) NOT NULL,
	[bdate] [date] NULL,
	[address] [varchar](30) NULL,
	[sex] [char](1) NULL,
	[salary] [decimal](10, 2) NULL,
	[superssn] [char](9) NULL,
	[dno] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ssn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Project]    Script Date: 11/21/2023 12:34:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Project](
	[pname] [varchar](15) NOT NULL,
	[pnumber] [int] NOT NULL,
	[plocation] [varchar](15) NULL,
	[dnum] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[pnumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Works_on]    Script Date: 11/21/2023 12:34:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Works_on](
	[essn] [char](9) NOT NULL,
	[pno] [int] NOT NULL,
	[hours] [decimal](3, 1) NULL,
PRIMARY KEY CLUSTERED 
(
	[essn] ASC,
	[pno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Department] ([dname], [dnumber], [mgrssn], [mgrstartdate]) VALUES (N'Headquarters', 1, N'888665555', CAST(N'1981-06-19' AS Date))
GO
INSERT [dbo].[Department] ([dname], [dnumber], [mgrssn], [mgrstartdate]) VALUES (N'Administration', 4, N'987654321', CAST(N'1995-01-01' AS Date))
GO
INSERT [dbo].[Department] ([dname], [dnumber], [mgrssn], [mgrstartdate]) VALUES (N'Research', 5, N'333445555', CAST(N'1988-05-22' AS Date))
GO
INSERT [dbo].[Dependent] ([essn], [dependent_name], [sex], [bdate], [relationship]) VALUES (N'123456789', N'Alice', N'M', CAST(N'1988-01-04' AS Date), N'Son')
GO
INSERT [dbo].[Dependent] ([essn], [dependent_name], [sex], [bdate], [relationship]) VALUES (N'123456789', N'Elizabeth', N'M', CAST(N'1967-05-05' AS Date), N'Spouse')
GO
INSERT [dbo].[Dependent] ([essn], [dependent_name], [sex], [bdate], [relationship]) VALUES (N'123456789', N'Michael', N'M', CAST(N'1988-01-04' AS Date), N'Son')
GO
INSERT [dbo].[Dependent] ([essn], [dependent_name], [sex], [bdate], [relationship]) VALUES (N'333445555', N'Alice', N'F', CAST(N'1986-04-05' AS Date), N'Daughter')
GO
INSERT [dbo].[Dependent] ([essn], [dependent_name], [sex], [bdate], [relationship]) VALUES (N'333445555', N'Joy', N'F', CAST(N'1958-05-03' AS Date), N'Spouse')
GO
INSERT [dbo].[Dependent] ([essn], [dependent_name], [sex], [bdate], [relationship]) VALUES (N'333445555', N'Theodore', N'M', CAST(N'1983-10-25' AS Date), N'Son')
GO
INSERT [dbo].[Dependent] ([essn], [dependent_name], [sex], [bdate], [relationship]) VALUES (N'987654321', N'Abner', N'M', CAST(N'1942-02-28' AS Date), N'Spouse')
GO
INSERT [dbo].[Dept_locations] ([dnumber], [dlocation]) VALUES (1, N'Houston')
GO
INSERT [dbo].[Dept_locations] ([dnumber], [dlocation]) VALUES (4, N'Stafford')
GO
INSERT [dbo].[Dept_locations] ([dnumber], [dlocation]) VALUES (5, N'Bellaire')
GO
INSERT [dbo].[Dept_locations] ([dnumber], [dlocation]) VALUES (5, N'Houston')
GO
INSERT [dbo].[Dept_locations] ([dnumber], [dlocation]) VALUES (5, N'Sugarland')
GO
INSERT [dbo].[Employee] ([fname], [minit], [lname], [ssn], [bdate], [address], [sex], [salary], [superssn], [dno]) VALUES (N'John', N'B', N'Smith', N'123456789', CAST(N'1965-01-09' AS Date), N'731 Fondren, Houston, TX', N'M', CAST(30000.00 AS Decimal(10, 2)), N'333445555', 5)
GO
INSERT [dbo].[Employee] ([fname], [minit], [lname], [ssn], [bdate], [address], [sex], [salary], [superssn], [dno]) VALUES (N'Franklin', N'T', N'Wong', N'333445555', CAST(N'1955-12-08' AS Date), N'638 Voss, Houston, TX', N'M', CAST(40000.00 AS Decimal(10, 2)), N'888665555', 5)
GO
INSERT [dbo].[Employee] ([fname], [minit], [lname], [ssn], [bdate], [address], [sex], [salary], [superssn], [dno]) VALUES (N'Joyce', N'A', N'English', N'453453453', CAST(N'1972-07-31' AS Date), N'5631 Rice, Houston, TX', N'F', CAST(25000.00 AS Decimal(10, 2)), N'333445555', 5)
GO
INSERT [dbo].[Employee] ([fname], [minit], [lname], [ssn], [bdate], [address], [sex], [salary], [superssn], [dno]) VALUES (N'Ramesh', N'K', N'Narayan', N'666884444', CAST(N'1962-09-15' AS Date), N'975 Fire Oak, Humble, TX', N'M', CAST(38000.00 AS Decimal(10, 2)), N'333445555', 5)
GO
INSERT [dbo].[Employee] ([fname], [minit], [lname], [ssn], [bdate], [address], [sex], [salary], [superssn], [dno]) VALUES (N'James', N'E', N'Borg', N'888665555', CAST(N'1973-11-10' AS Date), N'450 Stone, Houston, TX', N'M', CAST(55000.00 AS Decimal(10, 2)), NULL, 1)
GO
INSERT [dbo].[Employee] ([fname], [minit], [lname], [ssn], [bdate], [address], [sex], [salary], [superssn], [dno]) VALUES (N'Jennifer', N'S', N'Wallace', N'987654321', CAST(N'1941-06-20' AS Date), N'291 Berry, Bellaire, TX', N'F', CAST(43000.00 AS Decimal(10, 2)), N'888665555', 4)
GO
INSERT [dbo].[Employee] ([fname], [minit], [lname], [ssn], [bdate], [address], [sex], [salary], [superssn], [dno]) VALUES (N'Ahmad', N'V', N'Jabbar', N'987987987', CAST(N'1969-03-29' AS Date), N'980 Dallas, Houston, TX', N'M', CAST(25000.00 AS Decimal(10, 2)), N'987654321', 4)
GO
INSERT [dbo].[Employee] ([fname], [minit], [lname], [ssn], [bdate], [address], [sex], [salary], [superssn], [dno]) VALUES (N'Alicia', N'J', N'Zelaya', N'999887777', CAST(N'1968-07-19' AS Date), N'3321 Castle, Spring, TX', N'F', CAST(25000.00 AS Decimal(10, 2)), N'987654321', 4)
GO
INSERT [dbo].[Project] ([pname], [pnumber], [plocation], [dnum]) VALUES (N'ProductX', 1, N'Bellaire', 5)
GO
INSERT [dbo].[Project] ([pname], [pnumber], [plocation], [dnum]) VALUES (N'ProductY', 2, N'Sugarland', 5)
GO
INSERT [dbo].[Project] ([pname], [pnumber], [plocation], [dnum]) VALUES (N'ProductZ', 3, N'Houston', 5)
GO
INSERT [dbo].[Project] ([pname], [pnumber], [plocation], [dnum]) VALUES (N'Computerization', 10, N'Stafford', 4)
GO
INSERT [dbo].[Project] ([pname], [pnumber], [plocation], [dnum]) VALUES (N'Reorganization', 20, N'Houston', 1)
GO
INSERT [dbo].[Project] ([pname], [pnumber], [plocation], [dnum]) VALUES (N'Newbenefits', 30, N'Stafford', 4)
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'123456789', 1, CAST(32.5 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'123456789', 2, CAST(7.5 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'333445555', 2, CAST(10.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'333445555', 3, CAST(10.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'333445555', 10, CAST(10.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'333445555', 20, CAST(10.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'453453453', 1, CAST(20.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'453453453', 2, CAST(20.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'666884444', 3, CAST(40.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'888665555', 20, CAST(5.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'987654321', 20, CAST(15.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'987654321', 30, CAST(20.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'987987987', 10, CAST(35.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'987987987', 30, CAST(5.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'999887777', 10, CAST(10.0 AS Decimal(3, 1)))
GO
INSERT [dbo].[Works_on] ([essn], [pno], [hours]) VALUES (N'999887777', 30, CAST(30.0 AS Decimal(3, 1)))
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Departme__6B0C41ADAB66BE59]    Script Date: 11/21/2023 12:34:57 PM ******/
ALTER TABLE [dbo].[Department] ADD UNIQUE NONCLUSTERED 
(
	[dname] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Project__1FC9734C1EBC4018]    Script Date: 11/21/2023 12:34:57 PM ******/
ALTER TABLE [dbo].[Project] ADD UNIQUE NONCLUSTERED 
(
	[pname] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Department]  WITH CHECK ADD  CONSTRAINT [fk_dept_emp_mgrssn] FOREIGN KEY([mgrssn])
REFERENCES [dbo].[Employee] ([ssn])
GO
ALTER TABLE [dbo].[Department] CHECK CONSTRAINT [fk_dept_emp_mgrssn]
GO
ALTER TABLE [dbo].[Dependent]  WITH CHECK ADD  CONSTRAINT [fk_depend_emp_essn] FOREIGN KEY([essn])
REFERENCES [dbo].[Employee] ([ssn])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dependent] CHECK CONSTRAINT [fk_depend_emp_essn]
GO
ALTER TABLE [dbo].[Dept_locations]  WITH CHECK ADD  CONSTRAINT [fk_loc_dept_dnum] FOREIGN KEY([dnumber])
REFERENCES [dbo].[Department] ([dnumber])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dept_locations] CHECK CONSTRAINT [fk_loc_dept_dnum]
GO
ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [fk_emp_dept_dno] FOREIGN KEY([dno])
REFERENCES [dbo].[Department] ([dnumber])
GO
ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [fk_emp_dept_dno]
GO
ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [fk_emp_superssn] FOREIGN KEY([superssn])
REFERENCES [dbo].[Employee] ([ssn])
GO
ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [fk_emp_superssn]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [fk_proj_dept_dnum] FOREIGN KEY([dnum])
REFERENCES [dbo].[Department] ([dnumber])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [fk_proj_dept_dnum]
GO
ALTER TABLE [dbo].[Works_on]  WITH CHECK ADD  CONSTRAINT [fk_work_emp_essn] FOREIGN KEY([essn])
REFERENCES [dbo].[Employee] ([ssn])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Works_on] CHECK CONSTRAINT [fk_work_emp_essn]
GO
ALTER TABLE [dbo].[Works_on]  WITH CHECK ADD  CONSTRAINT [fk_work_proj_pno] FOREIGN KEY([pno])
REFERENCES [dbo].[Project] ([pnumber])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Works_on] CHECK CONSTRAINT [fk_work_proj_pno]
GO
USE [master]
GO
ALTER DATABASE [COMPANY] SET  READ_WRITE 
GO
