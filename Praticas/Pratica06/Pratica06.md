# Prática 06
## Aluno: Alysson Alexandre de Oliveira Araújo
## Matrícula: 474084

<br>
<br>
<br>
<br>


## Questão 01 - Amazon EC2

[Documentação do comando describe-instances](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-instances.html)

Crie algumas máquinas virtuais para o exercicio.

Com linhas de comando execute 10 comandos para testar o EC2. Comandos para listar dados das máquinas virtuais, listar em formatos diferentes, usar filtros, criar, interromper, finalizar, etc.

Mostre cada comando e o resultado (texto ou imagens).

<br>
<br>
<br>

Resposta:

comandos:
* aws ec2 describe-instances

```` json
{
    "Reservations": [
        {
            "Groups": [],
            "Instances": [
                {
                    "AmiLaunchIndex": 0,
                    "ImageId": "ami-0022f774911c1d690",
                    "InstanceId": "i-0427828d927eabb54",
                    "InstanceType": "t2.micro",
                    "KeyName": "vockey",
                    "LaunchTime": "2022-05-03T19:22:26+00:00",
                    "Monitoring": {
                        "State": "disabled"
                    },
                    "Placement": {
                        "AvailabilityZone": "us-east-1d",
                        "GroupName": "",
                        "Tenancy": "default"
                    },
                    "PrivateDnsName": "ip-172-31-17-71.ec2.internal",
                    "PrivateIpAddress": "172.31.17.71",
                    "ProductCodes": [],
                    "PublicDnsName": "ec2-54-167-54-221.compute-1.amazonaws.com",
                    "PublicIpAddress": "54.167.54.221",
                    "State": {
                        "Code": 16,
                        "Name": "running"
                    },
                    "StateTransitionReason": "",
                    "SubnetId": "subnet-001779884c7b8e265",
                    "VpcId": "vpc-06cb9b7690bd4fb8b",
                    "Architecture": "x86_64",
                    "BlockDeviceMappings": [
                        {
                            "DeviceName": "/dev/xvda",
                            "Ebs": {
                                "AttachTime": "2022-05-03T19:22:26+00:00",
                                "DeleteOnTermination": true,
                                "Status": "attached",
                                "VolumeId": "vol-08cdba0389fd94d39"
                            }
                        }
                    ],
                    "ClientToken": "",
                    "EbsOptimized": false,
                    "EnaSupport": true,
                    "Hypervisor": "xen",
                    "NetworkInterfaces": [
                        {
                            "Association": {
                                "IpOwnerId": "amazon",
                                "PublicDnsName": "ec2-54-167-54-221.compute-1.amazonaws.com",
                                "PublicIp": "54.167.54.221"
                            },
                            "Attachment": {
                                "AttachTime": "2022-05-03T19:22:26+00:00",
                                "AttachmentId": "eni-attach-0d6c96c292f14881d",
                                "DeleteOnTermination": true,
                                "DeviceIndex": 0,
                                "Status": "attached",
                                "NetworkCardIndex": 0
                            },
                            "Description": "",
                            "Groups": [
                                {
                                    "GroupName": "launch-wizard-1",
                                    "GroupId": "sg-01831f448a81e5de5"
                                }
                            ],
                            "Ipv6Addresses": [],
                            "MacAddress": "0a:99:9b:35:53:e9",
                            "NetworkInterfaceId": "eni-0b7c81678dca57326",
                            "OwnerId": "057913569652",
                            "PrivateDnsName": "ip-172-31-17-71.ec2.internal",
                            "PrivateIpAddress": "172.31.17.71",
                            "PrivateIpAddresses": [
                                {
                                    "Association": {
                                        "IpOwnerId": "amazon",
                                        "PublicDnsName": "ec2-54-167-54-221.compute-1.amazonaws.com",
                                        "PublicIp": "54.167.54.221"
                                    },
                                    "Primary": true,
                                    "PrivateDnsName": "ip-172-31-17-71.ec2.internal",
                                    "PrivateIpAddress": "172.31.17.71"
                                }
                            ],
                            "SourceDestCheck": true,
                            "Status": "in-use",
                            "SubnetId": "subnet-001779884c7b8e265",
                            "VpcId": "vpc-06cb9b7690bd4fb8b",
                            "InterfaceType": "interface"
                        }
                    ],
                    "RootDeviceName": "/dev/xvda",
                    "RootDeviceType": "ebs",
                    "SecurityGroups": [
                        {
                            "GroupName": "launch-wizard-1",
                            "GroupId": "sg-01831f448a81e5de5"
                        }
                    ],
                    "SourceDestCheck": true,
                    "Tags": [
                        {
                            "Key": "Name",
                            "Value": "Maquina 1"
                        }
                    ],
                    "VirtualizationType": "hvm",
                    "CpuOptions": {
                        "CoreCount": 1,
                        "ThreadsPerCore": 1
                    },
                    "CapacityReservationSpecification": {
                        "CapacityReservationPreference": "open"
                    },
                    "HibernationOptions": {
                        "Configured": false
                    },
                    "MetadataOptions": {
                        "State": "applied",
                        "HttpTokens": "optional",
                        "HttpPutResponseHopLimit": 1,
                        "HttpEndpoint": "enabled",
                        "HttpProtocolIpv6": "disabled",
                        "InstanceMetadataTags": "disabled"
                    },
                    "EnclaveOptions": {
                        "Enabled": false
                    },
                    "PlatformDetails": "Linux/UNIX",
                    "UsageOperation": "RunInstances",
                    "UsageOperationUpdateTime": "2022-05-03T19:22:26+00:00",
                    "PrivateDnsNameOptions": {
                        "HostnameType": "ip-name",
                        "EnableResourceNameDnsARecord": true,
                        "EnableResourceNameDnsAAAARecord": false
                    },
                    "MaintenanceOptions": {
                        "AutoRecovery": "default"
                    }
                }
            ],
            "OwnerId": "057913569652",
            "ReservationId": "r-081a11b41685f225c"
        },
        {
            "Groups": [],
            "Instances": [
                {
                    "AmiLaunchIndex": 0,
                    "ImageId": "ami-0022f774911c1d690",
                    "InstanceId": "i-0bfd8419cbc24b39c",
                    "InstanceType": "t2.micro",
                    "KeyName": "vockey",
                    "LaunchTime": "2022-05-03T19:23:39+00:00",
                    "Monitoring": {
                        "State": "disabled"
                    },
                    "Placement": {
                        "AvailabilityZone": "us-east-1d",
                        "GroupName": "",
                        "Tenancy": "default"
                    },
                    "PrivateDnsName": "ip-172-31-27-107.ec2.internal",
                    "PrivateIpAddress": "172.31.27.107",
                    "ProductCodes": [],
                    "PublicDnsName": "ec2-50-19-40-20.compute-1.amazonaws.com",
                    "PublicIpAddress": "50.19.40.20",
                    "State": {
                        "Code": 16,
                        "Name": "running"
                    },
                    "StateTransitionReason": "",
                    "SubnetId": "subnet-001779884c7b8e265",
                    "VpcId": "vpc-06cb9b7690bd4fb8b",
                    "Architecture": "x86_64",
                    "BlockDeviceMappings": [
                        {
                            "DeviceName": "/dev/xvda",
                            "Ebs": {
                                "AttachTime": "2022-05-03T19:23:40+00:00",
                                "DeleteOnTermination": true,
                                "Status": "attached",
                                "VolumeId": "vol-0da70663c1f2ddd1f"
                            }
                        }
                    ],
                    "ClientToken": "",
                    "EbsOptimized": false,
                    "EnaSupport": true,
                    "Hypervisor": "xen",
                    "NetworkInterfaces": [
                        {
                            "Association": {
                                "IpOwnerId": "amazon",
                                "PublicDnsName": "ec2-50-19-40-20.compute-1.amazonaws.com",
                                "PublicIp": "50.19.40.20"
                            },
                            "Attachment": {
                                "AttachTime": "2022-05-03T19:23:39+00:00",
                                "AttachmentId": "eni-attach-04dcd52c9b31c975e",
                                "DeleteOnTermination": true,
                                "DeviceIndex": 0,
                                "Status": "attached",
                                "NetworkCardIndex": 0
                            },
                            "Description": "",
                            "Groups": [
                                {
                                    "GroupName": "launch-wizard-2",
                                    "GroupId": "sg-011ce606163ea91a0"
                                }
                            ],
                            "Ipv6Addresses": [],
                            "MacAddress": "0a:a0:01:28:ec:4f",
                            "NetworkInterfaceId": "eni-0d1faee1375cc27d3",
                            "OwnerId": "057913569652",
                            "PrivateDnsName": "ip-172-31-27-107.ec2.internal",
                            "PrivateIpAddress": "172.31.27.107",
                            "PrivateIpAddresses": [
                                {
                                    "Association": {
                                        "IpOwnerId": "amazon",
                                        "PublicDnsName": "ec2-50-19-40-20.compute-1.amazonaws.com",
                                        "PublicIp": "50.19.40.20"
                                    },
                                    "Primary": true,
                                    "PrivateDnsName": "ip-172-31-27-107.ec2.internal",
                                    "PrivateIpAddress": "172.31.27.107"
                                }
                            ],
                            "SourceDestCheck": true,
                            "Status": "in-use",
                            "SubnetId": "subnet-001779884c7b8e265",
                            "VpcId": "vpc-06cb9b7690bd4fb8b",
                            "InterfaceType": "interface"
                        }
                    ],
                    "RootDeviceName": "/dev/xvda",
                    "RootDeviceType": "ebs",
                    "SecurityGroups": [
                        {
                            "GroupName": "launch-wizard-2",
                            "GroupId": "sg-011ce606163ea91a0"
                        }
                    ],
                    "SourceDestCheck": true,
                    "Tags": [
                        {
                            "Key": "Name",
                            "Value": "Maquina 2"
                        }
                    ],
                    "VirtualizationType": "hvm",
                    "CpuOptions": {
                        "CoreCount": 1,
                        "ThreadsPerCore": 1
                    },
                    "CapacityReservationSpecification": {
                        "CapacityReservationPreference": "open"
                    },
                    "HibernationOptions": {
                        "Configured": false
                    },
                    "MetadataOptions": {
                        "State": "applied",
                        "HttpTokens": "optional",
                        "HttpPutResponseHopLimit": 1,
                        "HttpEndpoint": "enabled",
                        "HttpProtocolIpv6": "disabled",
                        "InstanceMetadataTags": "disabled"
                    },
                    "EnclaveOptions": {
                        "Enabled": false
                    },
                    "PlatformDetails": "Linux/UNIX",
                    "UsageOperation": "RunInstances",
                    "UsageOperationUpdateTime": "2022-05-03T19:23:39+00:00",
                    "PrivateDnsNameOptions": {
                        "HostnameType": "ip-name",
                        "EnableResourceNameDnsARecord": true,
                        "EnableResourceNameDnsAAAARecord": false
                    },
                    "MaintenanceOptions": {
                        "AutoRecovery": "default"
                    }
                }
            ],
            "OwnerId": "057913569652",
            "ReservationId": "r-0e5e911b0f99f169f"
        },
        {
            "Groups": [],
            "Instances": [
                {
                    "AmiLaunchIndex": 0,
                    "ImageId": "ami-06eecef118bbf9259",
                    "InstanceId": "i-0fa3bc0a9dcbf4ad1",
                    "InstanceType": "t2.micro",
                    "KeyName": "vockey",
                    "LaunchTime": "2022-05-03T19:05:47+00:00",
                    "Monitoring": {
                        "State": "disabled"
                    },
                    "Placement": {
                        "AvailabilityZone": "us-east-1a",
                        "GroupName": "",
                        "Tenancy": "default"
                    },
                    "PrivateDnsName": "ip-10-0-0-38.ec2.internal",
                    "PrivateIpAddress": "10.0.0.38",
                    "ProductCodes": [],
                    "PublicDnsName": "ec2-3-81-135-41.compute-1.amazonaws.com",
                    "PublicIpAddress": "3.81.135.41",
                    "State": {
                        "Code": 16,
                        "Name": "running"
                    },
                    "StateTransitionReason": "",
                    "SubnetId": "subnet-0e802da2e6a57523f",
                    "VpcId": "vpc-084c80a6ba4c6ff42",
                    "Architecture": "x86_64",
                    "BlockDeviceMappings": [
                        {
                            "DeviceName": "/dev/xvda",
                            "Ebs": {
                                "AttachTime": "2022-05-03T19:05:48+00:00",
                                "DeleteOnTermination": true,
                                "Status": "attached",
                                "VolumeId": "vol-06cb1c8583ed4c052"
                            }
                        }
                    ],
                    "ClientToken": "c5102-Basti-5MRU144LYGG5",
                    "EbsOptimized": false,
                    "EnaSupport": true,
                    "Hypervisor": "xen",
                    "IamInstanceProfile": {
                        "Arn": "arn:aws:iam::057913569652:instance-profile/Work-Role",
                        "Id": "AIPAQ267K6F2KEQ2KE4DW"
                    },
                    "NetworkInterfaces": [
                        {
                            "Association": {
                                "IpOwnerId": "amazon",
                                "PublicDnsName": "ec2-3-81-135-41.compute-1.amazonaws.com",
                                "PublicIp": "3.81.135.41"
                            },
                            "Attachment": {
                                "AttachTime": "2022-05-03T19:05:47+00:00",
                                "AttachmentId": "eni-attach-0691127b112d73836",
                                "DeleteOnTermination": true,
                                "DeviceIndex": 0,
                                "Status": "attached",
                                "NetworkCardIndex": 0
                            },
                            "Description": "",
                            "Groups": [
                                {
                                    "GroupName": "Ec2SecurityGroup",
                                    "GroupId": "sg-03a65916dd511f784"
                                }
                            ],
                            "Ipv6Addresses": [],
                             "MacAddress": "0e:7c:7b:06:09:b9",
                            "NetworkInterfaceId": "eni-080cfeb864351945a",
                            "OwnerId": "057913569652",
                            "PrivateDnsName": "ip-10-0-0-38.ec2.internal",
                            "PrivateIpAddress": "10.0.0.38",
                            "PrivateIpAddresses": [
                                {
                                    "Association": {
                                        "IpOwnerId": "amazon",
                                        "PublicDnsName": "ec2-3-81-135-41.compute-1.amazonaws.com",
                                        "PublicIp": "3.81.135.41"
                                    },
                                    "Primary": true,
                                    "PrivateDnsName": "ip-10-0-0-38.ec2.internal",
                                    "PrivateIpAddress": "10.0.0.38"
                                }
                            ],
                            "SourceDestCheck": true,
                            "Status": "in-use",
                            "SubnetId": "subnet-0e802da2e6a57523f",
                            "VpcId": "vpc-084c80a6ba4c6ff42",
                            "InterfaceType": "interface"
                        }
                    ],
                    "RootDeviceName": "/dev/xvda",
                    "RootDeviceType": "ebs",
                    "SecurityGroups": [
                        {
                            "GroupName": "Ec2SecurityGroup",
                            "GroupId": "sg-03a65916dd511f784"
                        }
                    ],
                    "SourceDestCheck": true,
                    "Tags": [
                        {
                            "Key": "aws:cloudformation:logical-id",
                            "Value": "BastionHost"
                        },
                        {
                            "Key": "aws:cloudformation:stack-name",
                            "Value": "c51021a776376l1794013t1w057913569652"
                        },
                        {
                            "Key": "Name",
                            "Value": "Bastion Host"
                        },
                        {
                            "Key": "cloudlab",
                            "Value": "c51021a776376l1794013t1w057913569652"
                        },
                        {
                            "Key": "aws:cloudformation:stack-id",
                            "Value": "arn:aws:cloudformation:us-east-1:057913569652:stack/c51021a776376l1794013t1w057913569652/64aba370-cb13-11ec-b151-0e84556b4827"
                        }
                    ],
                    "VirtualizationType": "hvm",
                    "CpuOptions": {
                        "CoreCount": 1,
                        "ThreadsPerCore": 1
                    },
                    "CapacityReservationSpecification": {
                        "CapacityReservationPreference": "open"
                    },
                    "HibernationOptions": {
                        "Configured": false
                    },
                    "MetadataOptions": {
                        "State": "applied",
                        "HttpTokens": "optional",
                        "HttpPutResponseHopLimit": 1,
                        "HttpEndpoint": "enabled",
                        "HttpProtocolIpv6": "disabled",
                        "InstanceMetadataTags": "disabled"
                    },
                    "EnclaveOptions": {
                        "Enabled": false
                    },
                    "PlatformDetails": "Linux/UNIX",
                    "UsageOperation": "RunInstances",
                    "UsageOperationUpdateTime": "2022-05-03T19:05:47+00:00",
                    "PrivateDnsNameOptions": {
                        "HostnameType": "ip-name",
                        "EnableResourceNameDnsARecord": false,
                        "EnableResourceNameDnsAAAARecord": false
                    },
                    "MaintenanceOptions": {
                        "AutoRecovery": "default"
                    }
                }
            ],
            "OwnerId": "057913569652",
            "RequesterId": "043234062703",
            "ReservationId": "r-061d2ac517327468f"
        }
    ]
}

````

* aws ec2 describe-instances --instance-ids i-0427828d927eabb54
````json
{
    "Reservations": [
        {
            "Groups": [],
            "Instances": [
                {
                    "AmiLaunchIndex": 0,
                    "ImageId": "ami-0022f774911c1d690",
                    "InstanceId": "i-0427828d927eabb54",
                    "InstanceType": "t2.micro",
                    "KeyName": "vockey",
                    "LaunchTime": "2022-05-03T19:22:26+00:00",
                    "Monitoring": {
                        "State": "disabled"
                    },
                    "Placement": {
                        "AvailabilityZone": "us-east-1d",
                        "GroupName": "",
                        "Tenancy": "default"
                    },
                    "PrivateDnsName": "ip-172-31-17-71.ec2.internal",
                    "PrivateIpAddress": "172.31.17.71",
                    "ProductCodes": [],
                    "PublicDnsName": "ec2-54-167-54-221.compute-1.amazonaws.com",
                    "PublicIpAddress": "54.167.54.221",
                    "State": {
                        "Code": 16,
                        "Name": "running"
                    },
                    "StateTransitionReason": "",
                    "SubnetId": "subnet-001779884c7b8e265",
                    "VpcId": "vpc-06cb9b7690bd4fb8b",
                    "Architecture": "x86_64",
                    "BlockDeviceMappings": [
                        {
                            "DeviceName": "/dev/xvda",
                            "Ebs": {
                                "AttachTime": "2022-05-03T19:22:26+00:00",
                                "DeleteOnTermination": true,
                                "Status": "attached",
                                "VolumeId": "vol-08cdba0389fd94d39"
                            }
                        }
                    ],
                    "ClientToken": "",
                    "EbsOptimized": false,
                    "EnaSupport": true,
                    "Hypervisor": "xen",
                    "NetworkInterfaces": [
                        {
                            "Association": {
                                "IpOwnerId": "amazon",
                                "PublicDnsName": "ec2-54-167-54-221.compute-1.amazonaws.com",
                                "PublicIp": "54.167.54.221"
                            },
                            "Attachment": {
                                "AttachTime": "2022-05-03T19:22:26+00:00",
                                "AttachmentId": "eni-attach-0d6c96c292f14881d",
                                "DeleteOnTermination": true,
                                "DeviceIndex": 0,
                                "Status": "attached",
                                "NetworkCardIndex": 0
                            },
                            "Description": "",
                            "Groups": [
                                {
                                    "GroupName": "launch-wizard-1",
                                    "GroupId": "sg-01831f448a81e5de5"
                                }
                            ],
                            "Ipv6Addresses": [],
                            "MacAddress": "0a:99:9b:35:53:e9",
                            "NetworkInterfaceId": "eni-0b7c81678dca57326",
                            "OwnerId": "057913569652",
                            "PrivateDnsName": "ip-172-31-17-71.ec2.internal",
                            "PrivateIpAddress": "172.31.17.71",
                            "PrivateIpAddresses": [
                                {
                                    "Association": {
                                        "IpOwnerId": "amazon",
                                        "PublicDnsName": "ec2-54-167-54-221.compute-1.amazonaws.com",
                                        "PublicIp": "54.167.54.221"
                                    },
                                    "Primary": true,
                                    "PrivateDnsName": "ip-172-31-17-71.ec2.internal",
                                    "PrivateIpAddress": "172.31.17.71"
                                }
                            ],
                            "SourceDestCheck": true,
                            "Status": "in-use",
                            "SubnetId": "subnet-001779884c7b8e265",
                            "VpcId": "vpc-06cb9b7690bd4fb8b",
                            "InterfaceType": "interface"
                        }
                    ],
                    "RootDeviceName": "/dev/xvda",
                    "RootDeviceType": "ebs",
                    "SecurityGroups": [
                        {
                            "GroupName": "launch-wizard-1",
                            "GroupId": "sg-01831f448a81e5de5"
                        }
                    ],
                    "SourceDestCheck": true,
                    "Tags": [
                        {
                            "Key": "Name",
                            "Value": "Maquina 1"
                        }
                    ],
                    "VirtualizationType": "hvm",
                    "CpuOptions": {
                        "CoreCount": 1,
                        "ThreadsPerCore": 1
                    },
                    "CapacityReservationSpecification": {
                        "CapacityReservationPreference": "open"
                    },
                    "HibernationOptions": {
                        "Configured": false
                    },
                    "MetadataOptions": {
                        "State": "applied",
                        "HttpTokens": "optional",
                        "HttpPutResponseHopLimit": 1,
                        "HttpEndpoint": "enabled",
                        "HttpProtocolIpv6": "disabled",
                        "InstanceMetadataTags": "disabled"
                    },
                    "EnclaveOptions": {
                        "Enabled": false
                    },
                    "PlatformDetails": "Linux/UNIX",
                    "UsageOperation": "RunInstances",
                    "UsageOperationUpdateTime": "2022-05-03T19:22:26+00:00",
                    "PrivateDnsNameOptions": {
                        "HostnameType": "ip-name",
                        "EnableResourceNameDnsARecord": true,
                        "EnableResourceNameDnsAAAARecord": false
                    },
                    "MaintenanceOptions": {
                        "AutoRecovery": "default"
                    }
                }
            ],
            "OwnerId": "057913569652",
            "ReservationId": "r-081a11b41685f225c"
        }
    ]
}

````
*

## Questão 02 - Amazon S3

[Documentação do comando s3](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/index.html)

Com linhas de comando execute 10 comandos para testar o S3. Comandos para listar buckets, arquivos dos buckets, copiar, mover, apagar arquivos, apagar bucket, etc.

Mostre cada comando e o resultado (texto ou imagens).
