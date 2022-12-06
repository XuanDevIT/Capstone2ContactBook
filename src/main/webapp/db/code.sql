create database newspringboot;
use newspringboot;
    
    create table attendance (
       student_id bigint not null,
        time_study_id bigint not null,
        reason varchar(255),
        status bit not null,
        primary key (student_id, time_study_id)
    ) 
;
    
    create table class_study (
       class_study_id bigint not null auto_increment,
        class_name varchar(255),
        subject_id bigint,
        teacher_id bigint,
        primary key (class_study_id)
    ) 
;
    
    create table file_data (
       id bigint not null auto_increment,
        file_path varchar(255),
        name varchar(255),
        type varchar(255),
        student_id bigint,
        time_study_id bigint,
        primary key (id)
    ) 
;
    
    create table image_data (
       id bigint not null auto_increment,
        imagedata longblob,
        name varchar(255),
        type varchar(255),
        student_id bigint,
        time_study_id bigint,
        primary key (id)
    ) 
;
    
    create table student (
       student_id bigint not null auto_increment,
        address varchar(255),
        age varchar(255),
        birth_day varchar(255),
        birth_day_parent varchar(255),
        class_student varchar(255),
        fullname NVARCHAR(50),
        mail_parent varchar(255),
        name_parent varchar(255),
        password varchar(255),
        phone varchar(255),
        sex_parent varchar(255),
        sex_student varchar(255),
        username varchar(255),
        primary key (student_id)
    ) 
;
    
    create table student_class_study (
       class_study_id bigint not null,
        student_id bigint not null,
        primary key (class_study_id, student_id)
    ) 
;
    
    create table student_subject (
       student_id bigint not null,
        subject_id bigint not null,
        primary key (student_id, subject_id)
    ) 
;
    
    create table subject (
       subject_id bigint not null auto_increment,
        subject_name varchar(255),
        primary key (subject_id)
    ) 
;
    
    create table teach_subject (
       subject_id bigint not null,
        teach_id bigint not null
    ) 
;
    
    create table teacher (
       teacher_id bigint not null auto_increment,
        address varchar(255),
        birthday date,
        class_manage varchar(255),
        degree varchar(255),
        email varchar(255),
        fullname NVARCHAR(50),
        password varchar(255),
        phone varchar(255),
        photos varchar(255),
        sex varchar(255),
        username varchar(255),
        primary key (teacher_id)
    ) 
;
    
    create table teacher_subject (
       subject_id bigint not null,
        teacher_id bigint not null,
        primary key (subject_id, teacher_id)
    ) 
;
    
    create table time_study (
       time_study_id bigint not null auto_increment,
        time_study_day datetime,
        time_study_hour_end varchar(255),
        time_study_hour_start varchar(255),
        class_study_id bigint,
        primary key (time_study_id)
    ) 
;
    
    alter table attendance 
       add constraint FKnq6vm31it076obtjf2qp5coim 
       foreign key (student_id) 
       references student (student_id)
;
    
    alter table attendance 
       add constraint FKoiq7t2btsook6vuvoy6ywjnle 
       foreign key (time_study_id) 
       references time_study (time_study_id)
;
    
    alter table class_study 
       add constraint FKen71ebdk7vdmfqvuod0pfx9mo 
       foreign key (subject_id) 
       references subject (subject_id)
;
    
    alter table class_study 
       add constraint FKivbmoppalnqqtaun510r8st4l 
       foreign key (teacher_id) 
       references teacher (teacher_id)
;
    
    alter table file_data 
       add constraint FKceo2dlls8eujn5n0sgb0vcpte 
       foreign key (student_id) 
       references student (student_id)
;
    
    alter table file_data 
       add constraint FK11qkl0jlkstn8tbcn1wsr53xh 
       foreign key (time_study_id) 
       references time_study (time_study_id)
;
    
    alter table image_data 
       add constraint FKh417d401t3qy5fyk30dvmki07 
       foreign key (student_id) 
       references student (student_id)
;
    
    alter table image_data 
       add constraint FKj0ga0cl4h76v3ydnxx5ygnnnn 
       foreign key (time_study_id) 
       references time_study (time_study_id)
;
    
    alter table student_class_study 
       add constraint FKrt4513xncte3itfglm8yiac23 
       foreign key (class_study_id) 
       references class_study (class_study_id)
;
    
    alter table student_class_study 
       add constraint FKrqawlqk01t8leljk6g11lntn3 
       foreign key (student_id) 
       references student (student_id)
;
    
    alter table student_subject 
       add constraint FKnhw926s5os3ei5wqfaq94j0mh 
       foreign key (student_id) 
       references student (student_id)
;
    
    alter table student_subject 
       add constraint FK5cvx0kd792xhvd99s3bsbygfq 
       foreign key (subject_id) 
       references subject (subject_id)
;
    
    alter table teach_subject 
       add constraint FKhohh87xivdigby5b0ca5166rq 
       foreign key (teach_id) 
       references teacher (teacher_id)
;
    
    alter table teach_subject 
       add constraint FKmxkhkpjda07hl7syxam04nxrv 
       foreign key (subject_id) 
       references subject (subject_id)
;
    
    alter table teacher_subject 
       add constraint FKdnhs9kxdlnrvhq5k111c87pna 
       foreign key (subject_id) 
       references subject (subject_id)
;
    
    alter table teacher_subject 
       add constraint FK625xnjha5rs0qqynxsthk646k 
       foreign key (teacher_id) 
       references teacher (teacher_id)
;
    
    alter table time_study 
       add constraint FKnxhnhael2jn1uk40fb2gn7j3h 
       foreign key (class_study_id) 
       references class_study (class_study_id)